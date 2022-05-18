let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let saludo=document.createElement("div");
	saludo.innerHTML="Hello World";
	saludo.style.backgroundColor="yellow";
	document.body.appendChild(saludo);
});