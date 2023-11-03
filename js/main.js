var validacao = document.getElementsByClassName("validacao");
var aviso = document.getElementsByClassName("aviso");
const formulario = document.getElementById("formulario");

if (formulario){
    formulario.addEventListener("submit", validar);
}

function validar(formulario){
    
    formulario.preventDefault();
    alert("oiii")
}