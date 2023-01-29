import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import "../../styles/task.scss";
import TaskForm from "../pure/forms/taskForm";

const defaultTask1 = new Task(
  "Ejemplo1",
  "Tarea por default 1",
  true,
  LEVELS.NORMAL
);
const defaultTask2 = new Task(
  "Ejemplo2",
  "Tarea por default 2",
  false,
  LEVELS.URGENT
);
const defaultTask3 = new Task(
  "Ejemplo3",
  "Tarea por default 3",
  false,
  LEVELS.BLOCKING
);

function TaskListComponent() {
  // Estado del componente
  const [tasks, setTask] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);
  // Control del ciclo de vida del componente

  useEffect(() => {
    console.log("Task state has been modified");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      console.log("TaskList component is going to be unmounted");
    };
  }, [tasks]);

  function completeTask(task) {
    console.log("Complete this task: ", task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask[index].completed = !tempTask[index].completed;
    //Ahora debemos actualizar el estado del componente con la nueva lista y vamos a actualizar la iteracion de las tareas (tasks) para renderizar las tareas actualizadas
    setTask(tempTask);
  }

  function deleteTask(task) {
    console.log("Tarea eliminada: ", task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    //Con splice le decimos que queremos eliminar un elemento de la lista, el primer parametro indicamos desde que elemento queremos eliminar y con el segundo parametro
    //le indicamos cuantos elementos queremos eliminar
    tempTask.splice(index, 1);
    setTask(tempTask);
  }

  function addTask(task) {
    console.log("Tarea agregada");
    const tempTask = [...tasks];
    tempTask.push(task);
    setTask(tempTask);
  }

  function TaskTable() {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Descripción</th>
            <th scope="col">Prioridad</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                complete={completeTask}
                deleteTask={deleteTask}
              ></TaskComponent>
            );
          })}
        </tbody>
      </table>
    );
  }

  const loadingStyle = {
    color: 'grey',
    fontSize: '30px',
    fontWeight: 'bold'
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* Card Header (titulo) */}
          <div className="card-header p-3">
            <h5>Tus tareas:</h5>
          </div>
          {/* Card body */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
          {/* TODO: Agregar spinner */}
          {loading ? <p style={loadingStyle}>Cargando tareas...</p> : (tasks.length>0 ? <TaskTable></TaskTable> : <div><h3>No hay tareas para mostrar</h3><h4>Por favor crea una tarea</h4></div>)}
          </div>
        </div>
      </div>
      <TaskForm add={addTask} length={tasks.length}></TaskForm>
    </div>
  );
}

export default TaskListComponent;
