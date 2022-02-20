import { useState } from "react"
import { Timer } from "./Timer"

export const TimerPadre = () => {
  
  const [milisegundos, setMilisegundos] = useState(1000)
  
    return (
    <div>
        <span>Milisegundos { milisegundos }</span>
        <hr />
        <button 
            onClick={ () => setMilisegundos(1000) } 
            className="btn btn-outline-success">
            1000
         </button>
         <button 
            onClick={ () => setMilisegundos(2000) } 
            className="btn btn-outline-success">
            2000
         </button>
         
        <Timer milisegundos={ milisegundos }/>


    </div>
  )
}
