// Your code here
let input=document.querySelector("#addToDo");
let ul=document.querySelector("ul");
let papelera=document.querySelectorAll("span");
let eliminar=document.querySelectorAll("li");
input.addEventListener("change",function (){
  ul.innerHTML+=`<li><span><i class="fa fa-trash"></i></span> ${input.value}</li>`;
});


  for (let i=0;i<eliminar.length;i++){
    for(let t=0;t<papelera.length;t++){
      if(t===i){
        papelera[t].addEventListener("click", function(){
          console.log(eliminar[i]);
          ul=document.querySelector("ul");
          ul.removeChild(eliminar[i]);
        });
      }
    }
  }
