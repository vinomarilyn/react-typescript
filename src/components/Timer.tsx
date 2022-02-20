import { useEffect, useRef, useState } from "react"

type TimerArgs = {//tipos de argumento que recibe un componente
   milisegundos: number
}

export const Timer = ({ milisegundos }: TimerArgs) => { //type
  const [segundos, setSegundos] = useState(0)
  const ref = useRef< NodeJS.Timeout >() //referencia al intervalo dentro del useeffect

  useEffect(() => {
    ref.current && clearInterval(ref.current);  
    ref.current = setInterval( () => setSegundos(s => s + 1) , milisegundos );
  }, [milisegundos])
  
   return (
    <div>
        <h4>Timer: <small>{ segundos }</small></h4>
    </div>
  )
}
