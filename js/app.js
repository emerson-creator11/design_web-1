const cadastro = document.getElementById("cadastro");
const tarefa = cadastro.tarefa;

const lista = document.getElementById("lista");
cadastro.addEventListener("submit", function(e){

    e.preventDefault();
    const item = document.createElement("li");
    item.textContent = tarefa.value;
    lista.append(item);
    cadastro.reset();
    
}) 