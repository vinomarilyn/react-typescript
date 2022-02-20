import { useRef, useState } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
    name: string;
    done: boolean;
}
export const TaskForm = () => {
   const [newTask, setNewTask] = useState("");
   const [tasks, setTasks] = useState<ITask[]>([])//establece una nueva tarea
   const taskInput = useRef<HTMLInputElement>(null); 

   const handleSubmit = (e: FormElement) => {
       e.preventDefault();
       addTask(newTask);
       setNewTask('');
       taskInput.current?.focus();
   };

   const addTask = (name: string) => {
       const newTasks = [...tasks, {name, done: false}]
       setTasks(newTasks) 
    };
   
    const toggleDoneTask = (i: number): void => {
        const newTasks: ITask[] = [...tasks];
        newTasks[i].done = !newTasks[i].done;
        setTasks(newTasks);
    };
    
    const removeTask = (i: number): void => {
        const newTasks: ITask[] = [...tasks];
        newTasks.splice(i,1);
        setTasks(newTasks);
    };

   return (
     <div className="container p-4">
         <div className="row">
             <div className="col-md-6 offset-md-3">
             <div className="card mt-5">
        <div className="card-body">
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            onChange={e => setNewTask(e.target.value)}
            value={newTask}
            className="form-control"
            ref={taskInput}
            autoFocus
            />
            <button className="btn btn-success btn-block mt-3">
                Save
            </button>
        </form>
        </div>
      </div>  
        {
            tasks.map((t: ITask, i: number) => (
                <div className="card card-body mt-2 text-black" key={i}>
                 <h3 style={{textDecoration: t.done ? 'line-through' : ''}}>
                     {t.name}</h3>

                     <button className=" btn btn-secondary" onClick={() => toggleDoneTask(i)}>
                         {t.done ? '✓' : '✗'}
                     </button>
                     <button className="btn btn-danger" 
                       onClick={() => removeTask(i)}>
                         Delete
                     </button>

            </div>
            ) )
        }
            </div>
         </div>

     </div>

  )
}
