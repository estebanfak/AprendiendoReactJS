import React, {useState} from 'react'

//Puedo definir estulos dentro de constantes

//? Estilo usuario logueado
const loggedStyle = {
    color: 'white'
}

//? Estilo usuario no logueado 
const unloggedStyle = {
    color: 'tomato',
    fontWeigth: ' bold'
}

export default function GreetingStyled(props) {

    // Generamos un estado para el componente y así controlar  si el usuario está logueado
    const [logged, setLogged] =  useState(false);

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
        { logged ? <p>Hola, {props.name}</p> : <p>Hola, por favor logueate</p>}

        {/* En vez de crear la función por fuera y llamarla, podemos hacer una función anónima dentro del mismo onClick */}
        <button onClick={()=> setLogged(!logged)}>
            {logged ? 'Logout' : 'Login'}
        </button>
    </div>
  )
}
