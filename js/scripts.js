// Business Logic

//Business Logic for the Order
function Order(firstName, phoneNumber) {
  this.firstName = firstName;
  this.phoneNumber = phoneNumber;
  this.pizzas = [];
}

Order.prototype.pizzaSelection = function(pizza) {
  this.pizzas.push(pizza);
}

Order.prototype.orderSummary = function() {
  let totalAmount = 0;
  this.pizzas.forEach(function(pizza) {
    totalAmount += pizza.pricePerSize();
    });
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

// UI Logic

let order = new Order();
let pizzaSelect = new Pizza();

function displayOrderSummary(event) {
  event.preventDefault();

  const orderName = document.getElementById("name").value;
  const orderPhoneNum = document.getElementById("phone-number").value;
  order = (orderName, orderPhoneNum)

  let selectedPizzaSize = document.querySelector('input[name="pie-size"]:checked').value;
  let selectedTopping = document.querySelector('input[name="toppings"]:checked').value;

  pizzaSelect = new Pizza(selectedPizzaSize);
  pizzaSelect.addToppings(selectedTopping);
  order.pizzaSelection(pizzaSelect);

  document.querySelector("span#name").innerText = orderName;
  document.querySelector("span#phone-number").innerText = orderPhoneNum;
  document.getElementById("span#pie-size").innerText = selectedPizzaSize;
  document.getElementById("span#pizza-toppings-toppings").innerText = selectedTopping;
  document.getElementById("span#total-order").innerText = "$" + order.orderSummary();
}

window.addEventListener("load", function() {
  document.querySelector("form#pizzaOrder").addEventListener("submit", displayOrderSummary);
})