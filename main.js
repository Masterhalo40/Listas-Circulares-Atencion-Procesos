import SimulacionCiclos from './SimulacionCiclos.js';
import Ciclos from './Ciclos.js';
class Main{
    constructor(){
        this._Actual = null;
        document.querySelector('#btnCalcular').addEventListener('click', () => {
            let simulacionCiclos = new SimulacionCiclos();
            let contador = 0;
            let contadorFinal = 0;
            let numeroDeProcesos = 1;
            let numeroDeProcesos2 = 0;
            let ciclosRestantes = 0;

            for(let i=0;i<300;i++){
                if(simulacionCiclos.Lanzar()<=39){
                    this.nuevoProceso(new Ciclos('el proceso ' + numeroDeProcesos, Math.trunc(Math.random()*11)+4));
                    console.log('Se ha agregado un proceso');
                    numeroDeProcesos++;
                }

                if(this._Actual!==null){
                    this._Actual.numeroCiclos -=1;
                    
                    if(this._Actual.numeroCiclos === 0){
                        contadorFinal++;
                        console.log('Se completo ' + this._Actual.nombre);
                        this._Actual = this._Actual.siguiente;
                    }
                }else{
                    contador++;
                }
            }

            let faltantes = this._Actual;
            while(faltantes!==null){
                numeroDeProcesos2++;
                ciclosRestantes+= this._Actual.numeroCiclos;
                faltantes = faltantes.siguiente;
            }

            console.log('El total de procesos son: ' + contadorFinal);
            console.log('La Cola estuvo vacía en el ciclo: ' + contador);
            console.log('Total de ciclos faltantes: ' + ciclosRestantes);  
            console.log('Procesos que no fueron finalizados: ' + numeroDeProcesos2);        
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