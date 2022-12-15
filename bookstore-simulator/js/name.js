console.log("started name.js");


function saveName() {
    var nameField = document.querySelector("#name-input");
    var storeName = nameField.value;
    localStorage.setItem('storeName', storeName);
    console.log("name saved as " + storeName);
    window.location.href = "gameplay.html";
}


