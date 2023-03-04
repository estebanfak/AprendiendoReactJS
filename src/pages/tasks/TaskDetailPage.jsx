import React from 'react'
import {useParams} from 'react-router-dom'

function TaskDetailPage() {
    const {id} = useParams();
  return (
    <div>
        <h1>Detalle de la tarea - {id}</h1>
    </div>
  )
}

export default TaskDetailPage