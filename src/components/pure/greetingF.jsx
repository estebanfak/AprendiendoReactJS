// * Importamos también {useState} para poder definir estados y poder modificarlos y que renderice el componente
import React, {useState} from "react";
import PropTypes from "prop-types";


// * En los componentes funciones debemos utilizar hooks para especificar los states y poderlos modificar y que lo renderice
const GreetingF = (props) => {

    // * Este es el hook del state para poder modificarlo, detalles del hook:
    // * const [variable, método para actualizarlo] = useState(valor inicial);
    const [age, setAge] = useState(37);

    const birthday = () =>{
        setAge(age + 1);
    }


  return (
    <div>
      <h1>HOLA!! Soy el primer componente de tipo funcion</h1>
      <h2>Tu nombre es {props.name}!!</h2>
      <h3>Tu edad: {age}</h3>

        {/* Creamos el evento onClick y llamamos a la funcion ¡¡¡SIN los parentesis!!! para que se ejecute sólo cuando hacemos click */}
      <div>
        <button onClick={birthday}>Cumplir años</button>
      </div>
    </div>
  );
};

GreetingF.propTypes = {
    name: PropTypes.string,
};

export default GreetingF;
