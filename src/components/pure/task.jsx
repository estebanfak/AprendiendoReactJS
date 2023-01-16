import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";
// import { useState } from 'react';

function TaskComponent({ task }) {
  useEffect(() => {
    console.log("Created task");
    return () => {
      console.log(`Task: ${task.name} is going to unmount.`);
    };
  }, [task]);

  /**
   * Funcion que devuelve una insignia dependiendo del  nivel de la tarea
   */
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );
      default:
        break;
    }
  }

  /**
   * Función que devuelve un icono determinado según la tarea esté terminada o no
   * (Podemos usar la función o podemos utilizar el operador ternario dentro del return)
   */
  function taskCompletedIcon() {
    if (task.completed) {
      return <i className="bi-toggle-on" style={{ color: "green" }}></i>;
    } else {
      return <i className="bi-toggle-off" style={{ color: "grey" }}></i>;
    }
  }

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle">
        {/* Ejecución de la función para devolver la insignia del elemento */}
        {taskLevelBadge()}
      </td>
      <td className="align-middle">

      {/* Ejecutamos la función */}
        {taskCompletedIcon()}

        {/* O hacemos el operador ternario de abajo*/}
        {/* {task.completed ? (
          <i className="bi-toggle-on" style={{ color: "green" }}></i>
        ) : (
          <i className="bi-toggle-off" style={{ color: "grey" }}></i>
        )} */}

        <i className="bi-trash" style={{ color: "tomato" }}></i>
        {/* <span>{task.completed ? 'Completado' : 'Pendiente'}</span> */}
      </td>
    </tr>
  );
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
