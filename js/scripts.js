// Business
function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}

Pizza.prototype.calculateCost = function () {
    const basePrice = 20;
    const toppingPrice = 2.58;
    const sizeFactors = {
        small: 1,
        medium: 1.2,
        large: 1.35,
        XTRA: 1.7
    };
    const sizeFactor = sizeFactors[this.size];
    const toppingCost = this.toppings.length * toppingPrice;
    const totalCost = basePrice * sizeFactor + toppingCost;
    return totalCost;
}

// UI
document.addEventListener("DOMContentLoaded", function () {
    const addPizzaButton = document.getElementById("addPizza");
    const toppingsContainer = document.getElementById("toppings");
    const toppingsCheckboxes = toppingsContainer.querySelectorAll('input[type="checkbox"]');
    const sizeSelect = document.getElementById("size");
    const orderList = document.getElementById("orderList");
    const totalCostDiv = document.getElementById("totalCost");

    const pizzaOrders = [];


    addPizzaButton.disabled = true;

    toppingsContainer.addEventListener("change", checkAddPizzaButton);
    sizeSelect.addEventListener("change", checkAddPizzaButton);

    function checkAddPizzaButton() {
        const selectedToppings = getSelectedToppings();
        const selectedSize = getSelectedSize();
        addPizzaButton.disabled = !(selectedToppings.length > 0 && selectedSize);
    }

    addPizzaButton.addEventListener("click", handleAddPizza);

    function handleAddPizza() {
        const selectedToppings = getSelectedToppings();
        const selectedSize = getSelectedSize();

        const pizza = new Pizza(selectedToppings, selectedSize);
        pizzaOrders.push(pizza);

        const index = pizzaOrders.length - 1;
        const cost = pizza.calculateCost();
        const toppingsList = pizza.toppings.join(", ");
        const orderBox = createOrderBox(index, pizza.size, toppingsList, cost);
        orderList.appendChild(orderBox);

        addPizzaButton.disabled = false;

        const seeTotalButton = document.getElementById("seeTotalButton");
        seeTotalButton.addEventListener("click", function () {
            totalCostDiv.scrollIntoView({ behavior: "smooth" });
        });

        updateTotalCost();
    }

    function getSelectedToppings() {
        const selectedToppings = [];
        toppingsCheckboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                selectedToppings.push(checkbox.value);
            }
        });
        return selectedToppings;
    }

    function getSelectedSize() {
        const selectedSizeInput = sizeSelect.querySelector('input[name="size"]:checked');
        return selectedSizeInput ? selectedSizeInput.value : null;
    }

    function createOrderBox(index, size, toppingsList, cost) {
        const orderBox = document.createElement("div");
        orderBox.innerHTML = `
            <strong>Pizza ${index + 1}</strong>
            <br>
            <strong>Size:</strong> ${size}
            <br>
            <strong>Toppings:</strong> ${toppingsList}
            <br>
            <strong>Total Cost:</strong> $${cost.toFixed(2)}<br><br>`;
        return orderBox;
    }
    
    function updateTotalCost() {
        const total = pizzaOrders.reduce((acc, currentPizza) => acc + currentPizza.calculateCost(), 0);
        totalCostDiv.innerHTML = `<strong>Total Cost Of Order:</strong> $${total.toFixed(2)}`;
    }
});
