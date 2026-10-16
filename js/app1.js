const lista = []

const formulario = document.getElementById("formulario");
const texto = formulario.texto;

const tags = document.getElementById("tags");

formulario.addEventListener("submit", function (e){
    e.preventDefault();
    let t = texto.value;
    tags.innerHTML = t;
    formulario.reset();
})
