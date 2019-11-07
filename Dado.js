export default class Dado{
    constructor(){
    }
    Lanzar(){
        let a = Math.trunc(Math.random()*100)+1;
        return a;
    }
}