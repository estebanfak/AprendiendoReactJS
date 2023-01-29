import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

export default function TaskForm({add, length}) {
  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(nameRef.current.value, descriptionRef.current.value, false, levelRef.current.value);
    add(newTask);
    
  }
    
  const normalStyle = {
    color: 'blue',
    fontWeight: 'bold'
  }

  const urgentStyle = {
    color: 'yellow',
    fontWeight: 'bold'
  }

  const blockingStyle = {
    color: 'tomato',
    fontWeight: 'bold'
  }

  

  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fill'>
        <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Nombre de la tarea'/>
        <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Descripción'/>
        <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel' className='form-control form-control-lg'>
          <option value={LEVELS.NORMAL} style={normalStyle}>Normal</option>
          <option value={LEVELS.URGENT} style={urgentStyle}>Urgente</option>
          <option value={LEVELS.BLOCKING} style={blockingStyle}>Blocking</option>
        </select>
        {/* <input ref={levelRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus/> */}
        <button type='submit' className='btn btn-success btn-lg ms-2'>
          {length === 0 ? 'Crear tarea' : 'Agregar tarea'}
        </button>
      </div>
    </form>
  )
}

TaskForm.protoTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}
