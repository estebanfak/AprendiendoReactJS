import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import { Button } from 'bootstrap';

function TaskFormik({add, length}) {

    const initialValues = {
        nombre: '',
        descripcion: '',
        level: LEVELS.NORMAL
    }

    const taskSchema = Yup.object().shape({
        nombre: Yup.string().required('El nombre de la tarea es requerido'),
        descripcion: Yup.string().required('La tarea es requerida'),
        level: Yup.string().oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'Debes elegir un level')
        .required('Debes elegir un level')
    })

    function addTask(param) {
        const task = new Task(param.nombre, param.descripcion, false, param.level);
        console.log(task)
        add(task);
    }



  return (
    <div>
        <h4>Formulario de tareas</h4>
        <Formik 
        initialValues={initialValues}
        validationSchema={taskSchema}
        onSubmit={addTask}
        className='d-flex justify-content-center align-items-center mb-4'>
        {({values, touched, errors, isSubmitting})=>(
            <Form  className='form-outline flex-fill'>
            <label htmlFor='nombre'  className='form-control form-control-lg'>Nombre de la tarea</label>
            <Field
              id='nombre'
              type='text'
              name='nombre'
              placeholder='Nombre de la tarea'
              className='form-control form-control-lg'
            />
            {errors.nombre && touched.nombre && (
              <ErrorMessage name='nombre' component='div' />
            )}

            <label htmlFor='descripcion'  className='form-control form-control-lg'>Descripción de la tarea</label>
            <Field
              id='descripcion'
              type='text'
              name='descripcion'
              placeholder='Descripción de la tarea'
              className='form-control form-control-lg'
            />
            {errors.descripcion && touched.descripcion && (
              <ErrorMessage name='descripcion' component='div' />
            )}

            <label htmlFor='level'  className='form-control form-control-lg'>Prioridad de la tarea</label>
            <Field as='select' id='level' name='level'  className='form-control form-control-lg'>
                <option value={LEVELS.NORMAL}>NORMAL</option>
                <option value={LEVELS.BLOCKING}>BLOCKING</option>
                <option value={LEVELS.URGENT}>URGENT</option>
            {errors.level && touched.level && (
              <ErrorMessage name='level' component='div' />
            )}
            </Field>
            

            <button type='submit' className='btn btn-success btn-lg ms-2'>{length>0 ? <p>Agregar tarea</p> : <p>Nueva tarea</p>}</button>
            </Form>
        )}
        </Formik>
    </div>
  )
}

export default TaskFormik