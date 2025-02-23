//// JavaScript Classes Coding Challenge 10 - Inventory Management System
//Task 1: Creating a Product Class
/*
Created a Product class with name, id, price, and stock.
Added:
getDetails() → Returns product info.
updateStock(quantity) → Decreases stock when ordered.
*/

class Product {
  constructor(name, id, price, stock) {
      this.name = name;
      this.id = id;
      this.price = price;
      this.stock = stock;
  }

  getDetails() {
      return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
  }

  updateStock(quantity) {
      if (this.stock >= quantity) {
          this.stock -= quantity;
      } else {
          console.log("Not enough stock available.");
      }
  }
}

// Test Case
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 

prod1.updateStock(3);
console.log(prod1.getDetails());

/*Task 2: Creating an Order Class

Created an Order class with orderId, product, and quantity.
Added:
getOrderDetails() → Returns order info.
Stock is reduced when an order is placed.
*/

class Order {
  constructor(orderId, product, quantity) {
      if (product.stock >= quantity) {
          this.orderId = orderId;
          this.product = product;
          this.quantity = quantity;
          this.totalPrice = product.price * quantity;
          product.updateStock(quantity);
      } else {
          console.log("Order cannot be placed. Insufficient stock.");
      }
  }

  getOrderDetails() {
      return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`;
  }
}

// Test Case
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
console.log(prod1.getDetails());

/*
Task 3: Creating an Inventory Class

Created an Inventory class with:
products[] → Stores products.
addProduct(product) → Adds products to inventory.
listProducts() → Lists all products.

*/

class Inventory {
  constructor() {
      this.products = [];
  }

  addProduct(product) {
      this.products.push(product);
  }

  listProducts() {
      this.products.forEach(prod => console.log(prod.getDetails()));
  }
}

// Test Case
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();



