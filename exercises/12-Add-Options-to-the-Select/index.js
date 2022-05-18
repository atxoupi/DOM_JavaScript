let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
for(let i=0;i<countries.length;i++){
    let pais=document.createElement("option");
    pais.innerHTML=`${countries[i]}`;
    let lista=document.querySelector("#mySelect");
    lista.appendChild(pais);
}
let seleccion=document.querySelector("#mySelect");
seleccion.addEventListener('change',function(){
    let pais=seleccion.options[seleccion.selectedIndex].value;
    alert(pais);
});
