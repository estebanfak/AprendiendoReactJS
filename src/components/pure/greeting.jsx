import React, { Component } from 'react';
// El PropTypes propone tipos de datos especificos para utilizar. Ya que javascript tiene un tipado débil, 
// con ésta propiedad, le decimos exactamente el tipo de dato que necesitamos. Se lo asignamos en Greeting.propTypes
import PropTypes from 'prop-types';

// * Este es un componente de tipo clase, tiene propiedades privadas, constructores y métodos, a diferencia de los componentes funciones (greetingF.jsx)
class Greeting extends Component {

    // myAge = 37

    //* La info que pasamos por parametro (props) es dinamica
    constructor(props){
        super(props);

        // * La propiedad state de un componente es privada, estática y final. Para poder modificarlo, tengo que crear una funcion, traer el estado actual y
        // * modificarlo, porque sino, no renderiza la vista, siempre muestra el estado inicial
        // * para eso, creamos la funcion flecha birthday en la que seteamos el state desde el estado anterior y lo modificamos.
        // * Entonces en éste caso, logramos modificar el age del state y que vuelva a renderizar la web para mostrar el nuevo state
        this.state = {
            // * Si le pasamos el valor por medio de una propiedad e intentamos modificarlo con una función, el valor renderizado no se va a actualizar,
            // * porque el renderizado se produce al modificar el state
            //age: this.myAge
            
            age: 37
        }
    }

    render() {
        return (
            <div>
                <h1>HOLA!! Soy el primer componente de tipo clase</h1>
                <h2>Tu nombre es {this.props.name}</h2>
                <h3>Tu edad: {this.state.age}</h3>
                <div>
                    {/* Creamos el evento onClick y llamamos a la funcion ¡¡¡SIN los parentesis!!! para que se ejecute sólo cuando hacemos click */}
                    <button onClick={this.birthday}>Cumplir años</button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
            
            // * Modificando aquí, no me va a volver a renderizar la web
            // this.myAge ++


            {
                age: prevState.age + 1
            }
        ))
    }
}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
