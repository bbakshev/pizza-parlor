// Business Logic

//Business Logic for the Order
function Order(firstName, phoneNumber) {
  this.firstName = firstName;
  this.phoneNumber = phoneNumber;
  this.pizzas = [];
}

Order.prototype.pizzaSelection = function (pizza) {
  this.pizzas.push(pizza);
};

//Business Logic for Pizza
function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.addToppings = function (topping) {
  this.toppings.push(topping);
  return this.toppings;
};

Pizza.prototype.pricePerSize = function () {
  this.price = 0;
  this.sizePrice = { small: 12, medium: 14, large: 16, extra: 18 };
  this.price = this.sizePrice[this.size] + ((this.toppings.length) * 2);
};

Order.prototype.orderSummary = function () {
  let totalPrice = 0;
  this.pizzas.forEach(function (pizza) {
    pizza.pricePerSize();
    totalPrice += pizza.price;
  });
  return totalPrice;
};

// UI Logic

function displayOrderSummary(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name").value;
  const phoneNumberInput = document.getElementById("phone-number").value;
  let order = new Order(nameInput, phoneNumberInput);

  let pizzaSize = document.querySelector('input[name="pizza-size"]:checked').value;
  let pizza = new Pizza(pizzaSize);
  let toppingInputs = document.querySelectorAll('input[name="toppings"]:checked');
  let toppings = [];
  for (let i = 0; i < toppingInputs.length; i++) {
    toppings.push(toppingInputs[i].value);
  }
  for (let i = 0; i < toppings.length; i++) {
    pizza.addToppings(toppings[i]);
  }
  pizza.pricePerSize();
  order.pizzaSelection(pizza);

  document.getElementById("name1").innerHTML = order.firstName;
  document.getElementById("phone-number1").innerHTML = order.phoneNumber;
  document.getElementById("pizza-size").innerHTML = pizza.size;
  document.getElementById("pizza-toppings").innerHTML = pizza.toppings.join(", ");
  document.getElementById("total-order").innerHTML = "$" + order.orderSummary();

}

window.addEventListener("load", function () {
  document.querySelector("form#pizzaOrder").addEventListener("submit", displayOrderSummary);
});