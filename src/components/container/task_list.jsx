import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'
const defaultTask = new Task('Ejemplo', 'Tarea por default', false, LEVELS.NORMAL);

function TaskListComponent() {

    // Estado del componente
    const [tasks, setTask] = useState(defaultTask);
    const [loading, setLoading] = useState(true);
    // Control del ciclo de vida del componente

    useEffect(() => {
        console.log('Task state has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to be unmounted');
        };
    }, [tasks]);






    function changeCompleted(){
        console.log('TODO -> Cambiar estado a una tarea');
    }

    return (
        <div>
            <div>
                <h1>Tus tareas:</h1>
            </div>
            {/* TODO -> Aplicar un for/map para renderizar una lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
