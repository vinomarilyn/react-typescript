import { useState } from "react"

export const Counter = () => { //componente
  
    const [counter, setCounter] = useState(0)
    
    const incrementar = ( evento: number = 1 ):void => { //no regresa nada
        setCounter( counter + evento );
    }
  
    return (
    <div className="mt-5">
        <h3>Counter:</h3> 
        <span>Valor: { counter }</span>
         <hr />
         <button 
            onClick={ () => incrementar() } //1 argunmento - 2 argumento: ejecuta la accion 
            className="btn btn-outline-primary mt-2 ">
            +1
         </button>
         <button 
            onClick={ () => incrementar(2) } 
            className="btn btn-outline-primary mt-2 ">
            +2
         </button>

         <button 
            onClick={ () => setCounter(0) } //Definimos el valor 
            className="btn btn-outline-danger mt-2 ">
            Reset
         </button>
    </div>
  )
}
