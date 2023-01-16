/**
 * Ejemplo de uso de Hook useState
 * 
 * Crear un componente de tipo función y acceder a su estado privado a través de un hook, y además, poder modificarlo
 */

import React, {useState} from 'react'

function Ejemplo1() {
    
    //Valor inicial de un contador
    const valorInicial = 0;

    //Valor inicial de una persona
    const personaInicial = {
        nombre: 'Esteban',
        email: 'esteban@gmail.com'
    }

    /**
     * Queremos que valorInicial y personaInicial sean parte del estado del componente para así poder gestionar su cambio y que éste se vea
     * reflejado en la vista del componente
     * 
     * const [nombreVariable, funcionParaCambiarVariable] = useState(valorInicial)
     */



    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    function incrementarContador() {
        //? funcionParaCambiarVariable(nuevoValor)
        setContador(contador + 1 );
    }

    /**
     * Funcion para actualizar el estado de persona en el componente
     */
    function actualizarPersona() {
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@gmail.com'
            }
        )
    }



  return (
    <div>
        <h1>*** Ejemplo de useState ***</h1>
        <h2>Contador: {contador}</h2>
        <button onClick={incrementarContador}>Aumentar contador</button>
        <h2>Nombre: {persona.nombre}</h2>
        <h2>Email: {persona.email}</h2>
        <button onClick={actualizarPersona}>Modificar Persona</button>

    </div>
  )
}

export default Ejemplo1