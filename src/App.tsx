import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";
import { TimerPadre } from "./components/TimerPadre";
import { TaskForm } from "./components/TaskForm";

function App() {
  return (
    <>
     <h2>React con TypeScript!</h2>
    <hr />
     
     <h3>useState</h3>
    <Counter/> 
    <Usuario/>

    <hr />

    <h3>useEffect - useRef</h3>
    
    <TimerPadre/>
     
    <hr />
     
     <h3>formulario de tarea - crud</h3>
  
     <TaskForm/>
    </>
  );
}

export default App;
