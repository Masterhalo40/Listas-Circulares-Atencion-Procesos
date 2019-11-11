export default class Ciclos{
    constructor(nombre, numeroCiclos){
        this._nombre = nombre;
        this._numeroCiclos = numeroCiclos;
        this._siguiente = null;
    }

    get nombre(){
        return this._nombre;
    }
   
    get siguiente(){
        return this._siguiente;
    }

    get numeroCiclos(){
        return this._numeroCiclos;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
   
    set siguiente(siguiente){
        this._siguiente = siguiente;
    }

    set numeroCiclos(numeroCiclos){
        this._numeroCiclos = numeroCiclos;
    }
}