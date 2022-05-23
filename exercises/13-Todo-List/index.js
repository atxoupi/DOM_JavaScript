// Your code here
let input=document.querySelector("#addToDo");
let ul=document.querySelector("ul");
input.addEventListener("change",function (){
  ul.innerHTML+=`<li><span><i class="fa fa-trash"></i></span>${input.value}</li>`;
});


