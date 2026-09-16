let i = 1;
const imagem = document.getElementById("foto");

function proximo(e){
    e.preventDefault();
    if (i < 6){
        i = i + 1;
    }
    imagem.setAttribute("src",`./img/foto${i}.jpg`);
}

const prox = document.getElementById("prox");
prox.addEventListener("click", proximo);

function anterior(e){
    e.preventDefault();
    if(i>1){
        i = i - 1;
    }
    imagem.setAttribute("src",`./img/foto${i}.jpg`);
}

const ant = document.getElementById("ant");
ant.addEventListener("click", anterior);

function selecionar(e){
    e.preventDefault();
    i = cbbox.value;
    imagem.setAttribute("src",`./img/foto${i}.jpg`);
}
const cbbox = document.getElementById("combobox");
cbbox.addEventListener("change", selecionar);

function mudar(e, foto){
    e.preventDefault();
    i = foto;
    imagem.setAttribute("src",`./img/foto${i}.jpg`);
}
