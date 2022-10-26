var cart = new Set();;
var totalPrice = 0;

let allGlazingPrices = {
    "Keep original": {
        "glazingPrice": 0
    },
    "Sugar milk": {
        "glazingPrice": 0
    },
    "Vanilla milk": {
        "glazingPrice": 0.5
    },
    "Double chocolate": {
        "glazingPrice": 1.5
    }
};

let allPackSizePrices = {
    "1": {
        "packPrice": 1
    },
    "3": {
        "packPrice": 3
    },
    "6": {
        "packPrice": 5
    },
    "12": {
        "packPrice": 10
    }
};



class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;

        this.element = null
    }
}

//adding the cart items specified in the homework spec

function generateBun(rollType, rollGlazing, packSize) {
    let basePrice = rolls[rollType]["basePrice"];
    cart.add(new Roll(rollType, rollGlazing, packSize, basePrice));
}

generateBun("Original", "Sugar milk", "1");
generateBun("Walnut", "Vanilla milk", "12");
generateBun("Raisin", "Sugar milk", "3");
generateBun("Apple", "Keep original", "3");

const totalPriceField = document.querySelector('#total-price');

function createListing(listing) {
    const template = document.querySelector('#cart-listing-template');
    const clone = template.content.cloneNode(true);
    listing.element = clone.querySelector(".cart-listing");

    // adding link for remove from cart functionality
    const btnDelete = listing.element.querySelector('.cart-remove');
    btnDelete.addEventListener('click', () => {
      deleteListing(listing);
    });

    const cartListElement = document.querySelector('.cart');
    cartListElement.append(listing.element);

    //updating the picture
    const listImageElement = listing.element.querySelector('.thumbnail');
    listImageElement.src =  "./assets/products/" + rolls[listing.type]["imageFile"];

    //updating the name of the item
    listing.element.querySelector('.cart-name').innerText = listing.type + " Cinnamon Roll";

    //updating the glazing
    listing.element.querySelector('.cart-glazing').innerText = "Glazing: " + listing.glazing;

    //updating the pack size
    listing.element.querySelector('.cart-packsize').innerText = "Pack size: " + listing.size;

    //updating the price
    let price = (Number(listing.basePrice) + Number(allGlazingPrices[listing.glazing]["glazingPrice"])) * Number(allPackSizePrices[listing.size]["packPrice"]);
    listing.element.querySelector(".cart-price").innerText = "$ " + price.toFixed(2);
    totalPrice += price;
}

function deleteListing(listing) {
    listing.element.remove();
    cart.delete(listing);

    //ensuring total price field is updated when a listing is deleted
    totalPrice -= (Number(listing.basePrice) + Number(allGlazingPrices[listing.glazing]["glazingPrice"])) * Number(allPackSizePrices[listing.size]["packPrice"]);
    totalPriceField.innerText = "$ " + totalPrice.toFixed(2).replace('-0.00', '0.00');
}


for (const listing of cart) {
    createListing(listing);
}


//setting total price field
totalPriceField.innerText = "$ " + totalPrice.toFixed(2);
