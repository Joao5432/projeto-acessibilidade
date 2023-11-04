const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validar);


function focoErro(i) {
        var input = document.querySelectorAll("input");
        input[i].style.border = "2px solid red";
}

function focoMensagem(){
    var textArea = document.getElementById("mensagem");
    textArea.style.border = "2px solid red";
}

function tiraErro(i) {
    var input = document.querySelectorAll("input");
    input[i].style.border = "";

    var validacao = document.querySelector(".validacao");
    validacao.style.display = "none";

}


function validar(formulario) {

    formulario.preventDefault();

    //deixar li não visiveis
    li = document.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
        li[i].style.display = "none";
        
    }
    
    //div de validacao
    var validacao = document.querySelector(".validacao");

    //validar nome
    var inputNome = document.getElementById("nome");
    var nomeErro = document.getElementById("nomeErro");
    if (inputNome.value.length <= 5) {
        console.log("nome");
        nomeErro.innerHTML = "<li>Insira o seu nome completo</li>";
        validacao.style.display = "block";
        nomeErro.style.display = "block";
        li[0].style.display = "block";
        focoErro(0);
    }else{
        tiraErro(0);
    }
    // if(inputNome.value.length <= 5){
    //     nomeErro.innerHTML = "<li>Insira o seu nome completo</li>";
    //     validacao.style.display = "block";
    //     nomeErro.style.display = "block";
    //     li[0].style.display = "block";
    //     focoErro(0);
    // }

    //validar email
    var emailRegex = /\S+@\S+\.\S+/;
    var inputEmail = document.getElementById("e-mail");
    var emailErro = document.getElementById("emailErro");
    if (inputEmail.value.length == 0) {
        emailErro.innerHTML = "<li>Insira o seu email</li>";
        validacao.style.display = "block";
        emailErro.style.display = "block";
        li[1].style.display = "block";
        focoErro(1);
    }else if( !(emailRegex.test(inputEmail.value)) ){
        emailErro.innerHTML = "<li>Email inválido </li>";
        validacao.style.display = "block";
        emailErro.style.display = "block";
        li[1].style.display = "block";
        focoErro(1);
    }else{
        tiraErro(1)
    }

    //validar mensagem
    var inputMensagem = document.getElementById("mensagem");
    var mensagemErro = document.getElementById("mensagemErro");
    if (inputMensagem.value.length == 0) {
        mensagemErro.innerHTML = "<li>Insira a sua mensagem</li>";
        validacao.style.display = "block";
        mensagemErro.style.display = "block";
        li[1].style.display = "block";
        focoMensagem();
    }else{
        var textArea = document.getElementById("mensagem");
        textArea.style.border = "";
    }



}
