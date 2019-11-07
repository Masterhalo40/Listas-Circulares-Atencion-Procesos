import Dado from './Dado.js';
import Ciclo from './Ciclo.js';

class Main{
    constructor(){
        this._Actual = null;
        document.querySelector('#btnColas').addEventListener('click', () => {
            let dado = new Dado();
            let contador = 0;
            let conFinal = 0;
            let numDeProceso = 1;
            let numProcesosInc = 0;
            let ciclosFaltantes = 0;

            for(let i=0;i<300;i++){
                if(dado.Lanzar()<=39){
                    this.nuevoProceso(new Ciclo('proceso '+numDeProceso, Math.trunc(Math.random()*11)+4));
                    console.log('se ha agregado un nuevo proceso');
                    numDeProceso++;
                }

                if(this._Actual!==null){
                    this._Actual.numCiclos -=1;
                    
                    if(this._Actual.numCiclos === 0){
                        conFinal++;
                        console.log('Proceso completado '+ this._Actual.nombre);
                        this._Actual = this._Actual.siguiente;
                    }
                }else{
                    contador++;
                }
            }

            let incompletos = this._Actual;
            while(incompletos!==null){
                numProcesosInc++;
                ciclosFaltantes+=this._Actual.numCiclos;
                incompletos = incompletos.siguiente;
            }
            console.log('Cola vacía durante ' + contador + ' ciclos');
            console.log('Número de procesos completados: '+ conFinal);
            console.log('Procesos que no terminaron: '+ numProcesosInc);
            console.log('Suma de los ciclos pendientes: ' + ciclosFaltantes);          
        })
        
    } 

    nuevoProceso(proceso){
        if(this._Actual===null){
          this._Actual=proceso;
        }else{
              this._agregarproceso(proceso, this._Actual);
        }       
    }

    _agregarproceso(nuevo, ultimo){
          if(ultimo.siguiente===null){
            ultimo.siguiente=nuevo;
          }else{
            this._agregarproceso(nuevo, ultimo.siguiente)
          }
    }
}
let m = new Main();