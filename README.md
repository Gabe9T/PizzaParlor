# _Pizza Parlor_

#### By _**Gabriel Tucker**_

#### _Pizza Parlor_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

A Program Where A User Can Make A Pizza.

## Github Page Link

https://p2nts.github.io/PizzaParlor/
# _Click GhPages Link Above_
## Setup/Installation Requirements
* _Download VsCode https://www.youtube.com/watch?v=ITxcbrfEcIY_
* _Clone This Repo To VsCode https://github.com/P2NTS/projectweek4_
* _Install Live Server Extension For VsCode https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer_
* _After Installing Either Click "Go Live" On Bottom Right of Vscode Or Right Click And press "Open With Live Server On The Index.html File_





## Known Bugs

* _None As Of Now_


## License

MIT License

Copyright (c) [2023] [Gabriel Tucker]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Test
Describe: Pizza (constructor function)
test: Create a small pizza with pepperoni.
Code: const pizza = new Pizza(['pepperoni'], 'small');
Expected Output:The pizza object should have toppings array containing 'pepperoni' and the size should be 'small'.

Describe: calculateCost (method of the Pizza prototype)
test: Calculate cost for a large pizza with bacon and mushrooms.
Code: const pizza = new Pizza(['bacon', 'mushrooms'], 'large');
const cost = pizza.calculateCost();
Expected Output:The cost should be the base price for a large pizza plus the cost of two toppings.

Describe: checkAddPizzaButton
test: Check if "Add Pizza" button is disabled when no toppings and size are selected.
Code: checkAddPizzaButton(); const addPizzaButton = document.getElementById("addPizza");
Expected Output: The "Add Pizza" button should be disabled.

Describe: handleAddPizza
test: Add a pizza with bacon and check if pizzaOrders array is updated.
Code: const initialPizzaOrdersLength = pizzaOrders.length;
handleAddPizza();
Expected Output:The length of pizzaOrders array should be increased by 1.

Describe:getSelectedToppings
test: Check if selected toppings are retrieved correctly.
Code: const selectedToppings = getSelectedToppings();
Expected Output:The array selectedToppings should contain 'pepperoni' and 'mushrooms'.

Describe:getSelectedSize
test:  Check if selected size is retrieved correctly.
Code: const selectedSize = getSelectedSize();
Expected Output:The selectedSize should be 'medium'.

Describe:createOrderBox
test: Create an order box for a small pizza with pepperoni.
Code: const orderBox = createOrderBox(1, 'small', 'pepperoni', 22.58);
Expected Output:The orderBox HTML should contain information about the pizza with the correct size, toppings, and total cost.

Describe:updateTotalCost
test: Update the total cost after adding a pizza and check if the total cost div is updated.
Code: updateTotalCost();
const totalCostDiv = document.getElementById("totalCost");
Expected Output:The totalCostDiv HTML should contain the updated total cost.


