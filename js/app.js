let hoje = new Date();

const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;

const saudacao = document.getElementById("saudacao");

cadastro.addEventListener("submit", function (e){
    e.preventDefault();
    saudacao.innerHTML = `Olá, ${nome.value} hoje é ${hoje}`;
    cadastro.reset();

})