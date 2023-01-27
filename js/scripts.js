// Business Logic

//Business Logic for Pizza
function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addToppings = function (topping) {
  this.toppings.push(topping);
}
