var namen = ['Oğulcan', 'Dinho', 'Meli', 'Kahlid', 'Sean', 'Yassine', 'Bent', "Aydin"];
let container = document.getElementById("namenContainer");

for (let i = 0; i < namen.length; i++) {
    console.log(namen[i]);
    var button = document.createElement("button");

    button.innerText = namen[i];
    button.addEventListener("click", function() {
        buttonClicked(namen[i]);
    });

    container.appendChild(button);
}

function buttonClicked(name) {
    alert(name + " button clicked");
}