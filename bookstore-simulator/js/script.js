// setting store name
let customersServed = 0;

let storeName = "Your bookstore";
let selectedBook = null;

if (localStorage.getItem('storeName') != null) {
    localStorageName = localStorage.getItem('storeName');
    
    if (localStorageName.length !==  0) {
        storeName = localStorageName;
        console.log("retrieved from local storage");
    }
    
}

document.querySelector(".bookstore-name").innerHTML = storeName;

//timer
const timeHand = document.querySelector('.time-hand');
let time = 0;

function updateTime() {
    if (time/10 < 180) {
        timeHand.style.transform = "rotate(" + time/10 + "deg)";
        time++;
    }
}

setInterval(updateTime, 100);

//movement commands

let playerPos = 0;
let movementDisabled = false;
player = document.querySelector("#protag");
player.style.transitionDuration = "0s";

function moveToCheckout() {
    console.log("move to checkout")
    if (!movementDisabled) {
        movementDisabled = true;
        let delay = 0;
        if (playerPos == 0) {
            player.style.transitionDuration = "0s";
            checkout1();
        } else if (playerPos == 1){
            player.style.transitionDuration = "3s";
            delay = 3000;
        } else if (playerPos == 2){
            player.style.transitionDuration = "4s";
            delay = 2000;
        }
        player.style.paddingLeft = "150px";
        hideDialogue();
        hideBookshelf();
        setTimeout(() => playerPos = 0, delay);
        setTimeout(() => movementDisabled = false, delay);
        setTimeout(() => showCheckout(), delay);

    } else {
        console.log("could not move because there is already a movement command");
    }

    
}

function moveToRecCorner() {
    console.log("move to rec corner")
    if (!movementDisabled) {
        movementDisabled = true;
        let delay = 0;
        if (playerPos == 0) {
            player.style.transitionDuration = "3s";
            delay = 3000;
        } else if (playerPos == 1){
            player.style.transitionDuration = "0s";
        } else if (playerPos == 2){
            player.style.transitionDuration = "1.5s";
            delay = 1500;
        }
        player.style.paddingLeft = "550px";
        setTimeout(() => playerPos = 1, delay);
        setTimeout(() => movementDisabled = false, delay);
        if (selectedBook == null) {
            console.log(selectedBook);
            setTimeout(() => showDialogue(), delay);
        } else {
            setTimeout(() => giveBook(), delay);
        }
        
        hideBookshelf();
        hideCheckout();
    } else {
        console.log("could not move because there is already a movement command");
    }
    
}


function moveToBookshelf() {
    console.log("move to bookshelf")
    if (!movementDisabled) {
        let delay = 0;
        if (playerPos == 0) {
            player.style.transitionDuration = "4s";
            delay = 4000;
        } else if (playerPos == 1){
            player.style.transitionDuration = "1.5s";
            delay = 1500;
        } else if (playerPos == 2){
            player.style.transitionDuration = "0s";
        }
        player.style.paddingLeft = "660px";
        playerPos = 2;
        setTimeout(() => playerPos = 2, delay);
        setTimeout(() => movementDisabled = false, delay);
        setTimeout(() => showBookshelf(), delay);
        hideDialogue();
        hideCheckout();
    } else {
        console.log("could not move because there is already a movement command");
    }
    
}


//customer interaction for checkout

let numCheckoutCustomers = 3;

function checkout1() {
    setTimeout(() => checkout2(), 2000);
    
    let statusMessage = document.getElementById("protag-status");
    statusMessage.style.opacity = '100';
    statusMessage.innerHTML = "Checking out...";
    
}

function checkout2() {
    console.log("checkout");
    statusMessage = document.getElementById("protag-status");
    let firstImage = document.getElementsByClassName("checkout-customer");
    removeTarget = firstImage[0];
    removeTarget.style.opacity = '0';
    setTimeout(() => removeTarget.remove(), 2000);
    statusMessage.style.opacity = '0';
    setTimeout(() => removeTarget.remove(), 500);
}


function addCheckoutCustomer() {

}

//customer interaction for rec corner

function showDialogue() {
    let dialogueBox = document.getElementById("dialogue-box");
    dialogueBox.style.opacity = '100';
    dialogueBox.style.pointerEvents = 'cursor';
    dialogueBox.style.height = '500';
    //dialogueBox.style.padding = '20';

    
}

function hideDialogue() {
    let dialogueBox = document.getElementById("dialogue-box");
    dialogueBox.style.opacity = '0';
    dialogueBox.style.pointerEvents = 'none';
    dialogueBox.style.height = '0';
    //dialogueBox.style.padding = '0';

}

function showBookshelf() {
    let bookshelfBox = document.getElementById("bookshelf-box");
    bookshelfBox.style.opacity = '90';
    bookshelfBox.style.pointerEvents = 'auto';
    bookshelfBox.style.height = '500';
    //bookshelfBox.style.padding = '20';
    
}
function hideBookshelf() {
    let bookshelfBox = document.getElementById("bookshelf-box");
    bookshelfBox.style.opacity = '0';
    bookshelfBox.style.pointerEvents = 'none';
    bookshelfBox.style.height = '0';
    //bookshelfBox.style.padding = '0';
    
}


function showCheckout() {
    let checkoutBox = document.getElementById("checkout-box");
    checkoutBox.style.opacity = '90';
    checkoutBox.style.pointerEvents = 'auto';
    checkoutBox.style.height = '500';
    //checkoutBox.style.padding = '20';
    
}
function hideCheckout() {
    let checkoutBox = document.getElementById("checkout-box");
    checkoutBox.style.opacity = '0';
    checkoutBox.style.pointerEvents = 'none';
    checkoutBox.style.height = '0';
    //checkoutBox.style.padding = '0';
}





function selectBook(book) {
    let protagStatus = document.querySelector('#protag-status');
    protagStatus.style.opacity = '100';
    protagStatus.innerText = "Holding: " + book.title;
    selectedBook = book;
}


function giveBook() {
    console.log("givebook");
    statusMessage = document.getElementById("protag-status");
    removeTarget = document.getElementById("rec-customer");
    console.log(removeTarget);
    removeTarget.style.opacity = '0';
    setTimeout(() => removeTarget.remove(), 2000);
    statusMessage.style.opacity = '0';
    setTimeout(() => removeTarget.remove(), 500);
}

