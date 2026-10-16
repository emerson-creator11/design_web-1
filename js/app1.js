const lista = []

const formulario = document.getElementById("formulario");
const texto = formulario.texto;

const tags = document.getElementById("tags");

formulario.addEventListener("submit", function (e){
    e.preventDefault();
    let t = texto.value;
    t = t.split(" ")
    for (let i = 0; i<t.length; i++){
        let palavra = t[i];
        palavra = palavra.toUpperCase().trim();
        if (palavra.startsWith("#")){
            lista.push(palavra);
        }else if(palavra.includes("#")){
            let pos=  palavra.indexOf("#");
            palavra = palavra.slice(0,pos)
            lista.push(palavra);  
        }
    };

    tags.innerHTML = lista;
    formulario.reset();
})
