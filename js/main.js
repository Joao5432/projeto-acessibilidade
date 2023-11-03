var validacao = document.getElementsByClassName("validacao");
var aviso = document.getElementsByClassName("aviso");
const formulario = document.getElementById("formulario");

if (formulario){
    formulario.addEventListener("submit", validar);
}

function validar(formulario){
    //não deixar a página recarregar quando der submit
    
    //pegando os campos para validação e colocando em um array
    const Listacampos = document.querySelectorAll(".validar");

    //iterando campos de validacao
    for (let i = 0; i < Listacampos.length; i++){
        
        //receber os campos completos
        const campoCompleto = Listacampos[i];

        //pegar os valores dos campos
        var campoValor = campoCompleto.value;
        console.log(campoValor);

        if (campoValor === "") {
            formulario.preventDefault();
            document.getElementById("aviso").innerText = "oiii"
        }

    }
}