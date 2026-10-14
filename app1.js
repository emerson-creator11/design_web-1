class Animal {
    constructor(n,c="desconhecido",a=0.0,p=0,r="vira-lata") {
        this.nome = n;
        this.cor = c;
        this.altura = a;
        this.peso = p;
        this.raca = r;
    }

falar(){
    alert("oi")
}Comer(kg){
    this.peso += kg;
    alert("comi")
}
cagar(kg){
    this.peso -= kg;
    alert("caguei")
}
saudar(){
    let msg = `ola meu nome é ${this.nome}\n`;
    msg = msg + `cor:  ${this.cor}\n`;
    msg = msg + `altura: ${this.altura}\n`;
    msg = msg + `peso: ${this.peso}\n`;
    msg = msg + `raça: ${this.raca}\n`;
    alert(msg)
}

}
const balu = new Animal("balu brasil");
const mel = new Animal("mel", "amarelo", 1, 10, 45, "Labrador")