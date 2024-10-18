button1 = document.createElement("button");
button1.textContent = "Button 1";
container.appendChild(button1);

button2 = document.createElement("button");
button2.textContent = "Button 2";
container.appendChild(button2);

button3 = document.createElement("button");
button3.textContent = "Button 3";
container.appendChild(button3);

button1.style.backgroundColor = "green";
button2.style.backgroundColor = "red";
button3.style.backgroundColor = "blue";

button1.addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
});

button2.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
});

button3.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
});