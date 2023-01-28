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
  return totalAmount;
}

//Business Logic for Pizza
function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.price = 0
}

Pizza.prototype.addToppings = function (topping) {
  this.toppings = topping;
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
  this.toppings.forEach(function() {
    this.price += 2;
  });
  return this.price;
}

// UI Logic

let order = new Order();
let pizzaSelect = new Pizza();

function displayOrderSummary(event) {
event.preventDefault();

const nameInput = document.getElementById("name").value;
const phoneNumberInput = document.getElementById("phone-number").value;
const pizzaSizeInputs = document.getElementsByName("pizza-size");
const pizzaToppingInputs = document.getElementsByName("toppings");

order = new Order(nameInput, phoneNumberInput);

let selectedPizzaSize;
  for (let i = 0; i < pizzaSizeInputs.length; i++) {
    if (pizzaSizeInputs[i].checked) {
      selectedPizzaSize = pizzaSizeInputs[i].value;
    }
  }

  pizzaSelect = new Pizza(selectedPizzaSize);

  let selectedToppings = [];
  for (let i = 0; i < pizzaToppingInputs.length; i++) {
    if (pizzaToppingInputs[i].checked) {
      selectedToppings.push(pizzaToppingInputs[i].value);
    }
  }

  pizzaSelect.addToppings(selectedToppings);
  order.pizzaSelection(pizzaSelect);


document.querySelector("span#name1").innerText = nameInput;
document.querySelector("span#phone-number1").innerText = phoneNumberInput;
document.querySelector("span#pizza-size").innerText = selectedPizzaSize.split("-")[0];
document.querySelector("span#pizza-toppings").innerText = selectedToppings.join(', ');
document.querySelector("span#total-order").innerText = "$" + order.orderSummary();
}

Order.prototype.orderSummary = function() {
  let totalAmount = 0;
  this.pizzas.forEach(function(pizza) {
  totalAmount += pizza.pricePerSize();
  });
  return totalAmount;
  }

window.addEventListener("load", function() {
  document.querySelector("form#pizzaOrder").addEventListener("submit", displayOrderSummary);
})