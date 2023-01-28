# Pizza Parlor

#### By **Brishna Bakshev**

##### A simple HTML and JavaScript form to input a name and phone number as well as making pizza size and topping selection. 

## Technologies Used

* HTML
* CSS
* JavaScript
* VS Code

## Description

This browser application allows users to create a form to input a name and phone number as well as allows users to make a selection using radio buttons for pizza size and their choice of topping.

## Setup/Installation Requirements
Open Terminal
Change the current working directory to the location where you want the cloned directory (ex: Desktop)
```sh
git clone https://github.com/bbakshev/pizza-parlor
```
In the Terminal, navigate to the folder you have cloned in your Desktop
Open the code in VS code by typing: 
```sh
code .
```
Once the code is completed, open the index.html in your browser by double clicking on the file from the folder.

## Known Bugs

The only known bug in this program is that the Total Amount displays as $0 despite selecting a pizza size with the correct price.

## TDD

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza("small", ["anchovies", "pineapple"]);
Expected Output: myPizza { size: "small" , toppings: ["anchovies", "pineapple"]}

Test: "It should returnn a Pizza object with three  properties for toppings, size and price"
Code: const myPizza = new Pizza("small", ["anchovies", "pineapple"], 12);
Expected Output: myPizza { size: "small" , toppings: ["anchovies", "pineapple"], price: $12}

Test: "It should returnn a Pizza object with three  properties for toppings, size and price and calculate the price of each topping"
Code: const myPizza = new Pizza("small", ["anchovies", "pineapple"], 12 + 2);
Expected Output: myPizza { size: "small" , toppings: ["anchovies", "pineapple"], price: $14}

Describe: Order()

Test: "It should return an Order object with two properties for customer name and phone number "
Code: const customerOne = new Pizza("John", "555-555-5555");
Expected Output: customerOne { firstName: "John" , phoneNumber: "555-555-5555"}

Test: "It should allow user to select pizza when they are trying to place their Order "
Code: const customerOne = new Pizza("John", "555-555-5555", "small");
Expected Output: customerOne { firstName: "John" , phoneNumber: "555-555-5555" size: "small"}

Test: "It should allow the user view the total amount for the order"
Code: const myPizza = new Pizza("medium")
myPizza.addToppings("anchovies");
myOrder.pizzaSelection(myPizza)
myOrder.orderSummary()
Expected Output: myOrder = {name: "John", phoneNumber: "555-555-5555", size: "small", toppings: "anchovies" }

## License

MIT

Copyright (c) 2023 Brishna Bakshev