// Business Logic

//Business Logic for the Order
function Order(firstName, phoneNumber) {
  this.firstName = firstName;
  this.phoneNumber = phoneNumber;
  this.pizzas = [];
}

Order.prototype.numberOfPizza = function(pizza) {
  this.pizzas.push(pizza);
}

Order.prototype.calculateTotal = function() {
  let total = 0;
  this.pizzas.forEach(pizza => {
    total += pizza.pricePerSize();
  });
  return total;
}

//Business Logic for Pizza
function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.price = 0
}

Pizza.prototype.addToppings = function (topping) {
  this.toppings.push(topping);
}

Pizza.prototype.pricePerSize = function() {
  if(this.size === "small") {
    this.price = 12;
  } else if (this.size === "medium") {
    this.price = 14;
  } else if (this.size === "large") {
    this.price = 16;
  } else if (this.size === "extra large") {
    this.price = 18;
  }
  const priceForTopping = this;
  this.toppings.forEach(function() {
    priceForTopping.price += 2;
  })
  return this.price;
}