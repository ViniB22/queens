export default class Cubo{
    constructor(aresta){
        this.aresta = aresta
    }

    calcularAreaTotal(){
        return 6 * Math.pow(this.aresta, 2)  //Comentário: return 6 * this.aresta * this.aresta
    }

    calcularVolume(){
        return Math.pow(this.aresta, 3)  //Comentário: return this.aresta * this.aresta * this.aresta
    }
}