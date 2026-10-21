let hoje = new Date();

const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;

const saudacao = document.getElementById("saudacao");

cadastro.addEventListener("submit", function (e){
    e.preventDefault();
    let data_formada = `${hoje.getDate()}/${hoje.getMonth() + 1}/${hoje.getFullYear()}`;
    saudacao.innerHTML = `Olá, ${nome.value} hoje é ${data_formada}`;
    cadastro.reset();

})