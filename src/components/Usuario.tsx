import { useState } from "react";

interface User {//reglas para los objetos
   uid: string;
   name:string;
}


export const Usuario = () => {
  const [user, setUser] = useState<User>();
  const login = () => {
      setUser({
          uid: 'ABD123',
          name: 'Maria Rojas'
      })
  }
    return (
    <div className="mt-5">
        <h3>Usuario:</h3>

        <button
           onClick={ login }
           className="btn btn-outline-primary">
           Login
        </button>
        {
            (!user)
            ? <pre> No existe el usuario </pre>
            : <pre>{ JSON.stringify( user ) }</pre> 
          
        }
            
    </div>
  )
}
