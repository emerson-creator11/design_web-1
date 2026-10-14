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
}
Comer(kg){
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
    return(msg);
}




}
class Cachorro extends Animal{
    constructor(n,c="desconhecido",a=0.0,p=0,r="vira-lata") {
        super(n, c, a, p, r);
        this.patas = 4;
    }
    falar(){
        alert("au au");
    }
    saudar(){
        let msg = super.saudar();
        msg = msg+ "sou um cachorro\n";
        alert(msg);
    }
}
class Passaro extends Animal{
    constructor(n,c="desconhecido",a=0.0,p=0,r="vira-lata") {
        super(n, c, a, p, r);
        
    }
    falar(){
        alert("fiu! fiu!");
    }
     saudar(){
        let msg = super.saudar();
        msg = msg+ "sou um passaro\n";
        alert(msg);
    }
}
const balu = new Cachorro("balu brasil");
const mel = new Cachorro("mel", "amarelo", 1, 10, 45, "Labrador");
const Ravy = new Passaro("Ravy", "verde", 0.5, 0.1, r="Canário");