let hoje = new Date();

const cadastro = document.getElementById("cadastro");
const nome = cadastro.elements.nome;
const nasc = cadastro.elements.nasc;

const saudacao = document.getElementById("saudacao");
const aniv = document.getElementById("aniv");

cadastro.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!nome.value || !nasc.value) {
        saudacao.textContent = "Preencha seu nome e sua data de nascimento.";
        aniv.textContent = "";
        return;
    }

    const nascimento = new Date(nasc.value + "T00:00:00");
    const dataAtual = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
    const aniversario = new Date(dataAtual.getFullYear(), nascimento.getMonth(), nascimento.getDate());

    let dataFormatada = `${hoje.getDate()}/${hoje.getMonth() + 1}/${hoje.getFullYear()}`;
    saudacao.textContent = `Olá, ${nome.value}! Hoje é ${dataFormatada}.`;

    if (aniversario < dataAtual) {
        const proximoAniversario = new Date(
            dataAtual.getFullYear(),
            nascimento.getMonth(),
            nascimento.getDate()
        );
        proximoAniversario.setFullYear(proximoAniversario.getFullYear() + 1);

        const diffDias = Math.ceil((proximoAniversario - dataAtual) / (1000 * 60 * 60 * 24));
        aniv.textContent = `Faltam ${diffDias} dias para o seu aniversário.`;
    } else if (aniversario.getTime() === dataAtual.getTime()) {
        aniv.textContent = "Hoje é o seu aniversário!";
    } else {
        const diffDias = Math.ceil((aniversario - dataAtual) / (1000 * 60 * 60 * 24));
        aniv.textContent = `Faltam ${diffDias} dias para o seu aniversário.`;
    }

    cadastro.reset();
});