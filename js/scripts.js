// Business Logic

//Business Logic for Pizza
function Pizza(size) {
  this.pizzaSize = size;
  this.addTopping = [];
}

Pizza.prototype.addToppings = function () {
  this.addTopping.push();
}

const myPizza = new Pizza("medium", ["anchovies", "pineapple"]);