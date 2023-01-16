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
    setLoading(false);
    return () => {
      console.log("TaskList component is going to be unmounted");
    };
  }, [tasks]);

  function changeCompleted() {
    console.log("TODO -> Cambiar estado a una tarea");
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* Card Header (titulo) */}
          <div className="card-header p-3">
            <h5>Tus tarea:</h5>
          </div>
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
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
                    <TaskComponent key={index} task={task}></TaskComponent>
                  );
                })}
              </tbody>
            </table>
          </div>
          <TaskForm></TaskForm>
        </div>
      </div>
    </div>
  );
}

export default TaskListComponent;
