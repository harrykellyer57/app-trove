/* Filename: ComplexCode.js - A Complex and Sophisticated Code Example */
 
// This JavaScript code performs a simulation of a stock market trading platform.

// Class representing a stock
class Stock {
  constructor(symbol, price) {
    this.symbol = symbol;
    this.price = price;
  }
 
  calculateDividend() {
    return this.price * 0.1;
  }
}

// Class representing a user account
class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
    this.stocks = [];
  }
 
  deposit(amount) {
    this.balance += amount;
  }
 
  buyStock(stock, quantity) {
    const totalCost = stock.price * quantity;
    if (this.balance >= totalCost) {
      this.balance -= totalCost;
      for (let i = 0; i < quantity; i++) {
        this.stocks.push(stock);
      }
      console.log(`${this.username} bought ${quantity} ${stock.symbol} stocks.`);
    } else {
      console.log(`${this.username} does not have enough balance to buy ${quantity} ${stock.symbol} stocks.`);
    }
  }
 
  sellStock(stock, quantity) {
    const totalValue = stock.price * quantity;
    const stockCount = this.getStockCount(stock);
    if (stockCount >= quantity) {
      this.balance += totalValue;
      for (let i = 0; i < quantity; i++) {
        const index = this.stocks.indexOf(stock);
        this.stocks.splice(index, 1);
      }
      console.log(`${this.username} sold ${quantity} ${stock.symbol} stocks.`);
    } else {
      console.log(`${this.username} does not have enough ${stock.symbol} stocks to sell ${quantity}.`);
    }
  }
 
  getStockCount(stock) {
    return this.stocks.filter((s) => s === stock).length;
  }
}

// Function to execute the stock market simulation
function runSimulation() {
  const stock1 = new Stock("AAPL", 150);
  const stock2 = new Stock("GOOG", 1200);
 
  const account1 = new Account("John");
  account1.deposit(10000);
  account1.buyStock(stock1, 5);
  account1.sellStock(stock2, 2);
  account1.sellStock(stock1, 3);
 
  const account2 = new Account("Jane");
  account2.deposit(5000);
  account2.buyStock(stock2, 3);
  account2.sellStock(stock1, 1);
}

runSimulation();