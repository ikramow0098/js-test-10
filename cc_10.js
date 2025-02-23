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

