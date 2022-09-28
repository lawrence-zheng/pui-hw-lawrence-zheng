const basePrice = 2.49

let allGlazings = [
    {
        option: "Keep original",
        glazingPrice: 0,
    },
    {
        option: "Sugar milk",
        glazingPrice: 0,

    },
    {
        option: "Vanilla milk",
        glazingPrice: 0.5,
    },
    {
        option: "Double chocolate",
        glazingPrice: 1.5,
    }

];

let allPackSizes = [
    {
        option: 1,
        packPrice: 1,
    },
    {
        option: 3,
        packPrice: 3,
    },
    {
        option: 6,
        packPrice: 5,
    },
    {
        option: 12,
        packPrice: 10,
    }
]


function displayGlazings() {
    let glazingDropdown = document.querySelector("#glazing");
    for(var i = 0; i < allGlazings.length; i++) {
        var opt = allGlazings[i].option;
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        glazingDropdown.appendChild(el);
    }
}



function displayGlazings() {
    let glazingDropdown = document.querySelector("#glazing");
    for(var i = 0; i < allGlazings.length; i++) {
        var el = document.createElement("option");
        el.textContent = allGlazings[i].option;
        el.value = allGlazings[i].glazingPrice;
        glazingDropdown.appendChild(el);
    }
}

function displayPackSizes() {
    let packSizeDropdown = document.querySelector("#packsize");
    for(var i = 0; i < allPackSizes.length; i++) {
        var el = document.createElement("option");
        el.textContent = allPackSizes[i].option;
        el.value = allPackSizes[i].packPrice;
        packSizeDropdown.appendChild(el);
    }
}

function glazingChange(element) {
    const priceChange = element.value;

    let selectElement = document.querySelector("#final-price");
    let price = (Number(basePrice) + Number(priceChange)) * Number(document.querySelector("#packsize").value);
    console.log("cinnamon roll price calculation: (" + basePrice + " + " + priceChange + ") * " + document.querySelector('#packsize').value + " = " + price );
    console.log()
    selectElement.innertext = "$" + price;

}

displayGlazings();
displayPackSizes();