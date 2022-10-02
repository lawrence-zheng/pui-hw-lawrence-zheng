var cart = [];

// getting the bun type from the URL
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");



//getting information about the bun
const bunName = rollType + " Cinnamon Roll";
const basePrice = rolls[rollType]["basePrice"];
const bunImage = rolls[rollType]["imageFile"];

//updating the heading
document.getElementById("main-heading").innerHTML = bunName;

//updating the price
document.getElementById("final-price").innerHTML = "$ " + basePrice.toFixed(2);

//updating the image
document.getElementById("detail-roll").src = "./assets/products/" + bunImage;

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function addBunToCart() {
    var rollGlazing = document.querySelector("#glazing");
    console.log(rollGlazing);
}