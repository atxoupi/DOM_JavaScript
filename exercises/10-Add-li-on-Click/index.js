let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let hijo=document.createElement("li");
	hijo.innerHTML="Forth element";
	let lista=document.querySelector("#myList");
	lista.appendChild(hijo);
});
