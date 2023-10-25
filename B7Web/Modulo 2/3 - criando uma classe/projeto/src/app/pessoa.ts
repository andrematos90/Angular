export class Pessoa {
    public id:number;
    public nome:string;
    public idade:number;
    public raca:string;

    constructor(id:number, nome:string, idade:number){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.raca = 'desconhecida'
    }

    getTipo(){
        if(this.idade <= 13){
            return "Criança"
        }else if(this.idade > 14 || this.idade <=18){
            return "Adolescente";
        }else{
            return "Adulto"
        }
    }
}
