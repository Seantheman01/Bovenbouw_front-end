var namen = ['Oğulcan', 'Dinho', 'Meli', 'Kahlid', 'Sean', 'Yassine', 'Bent', "Aydin"];
let container = document.getElementById("namenContainer");

for (let i = 0; i < namen.length; i++) {
    console.log(namen[i]);
    var button = document.createElement("button");

    button.innerText = namen[i];
    button.addEventListener("click", buttonClicked);

    container.appendChild(button);
}

function buttonClicked(e) {
    alert(e.target.innerText + " button clicked");
}