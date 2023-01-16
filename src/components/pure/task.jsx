import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss'
// import { useState } from 'react';


function TaskComponent({task}){

    useEffect(() => {
        console.log('Created task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount.`)
        };
    }, [task]);

    return (
        <div>
            <div>
            <h2 className='task-name'>Nombre: {task.name}</h2>
            <h3>Descripción: {task.description}</h3>
            <h4>Level: {task.level}</h4>
            <h5>Estado de la tarea: {task.completed ? 'COMPLETADO':'PENDIENTE'}</h5>
            </div>
        </div>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
};


export default TaskComponent;
