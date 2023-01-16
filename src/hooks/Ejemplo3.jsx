/**
 * Ejemplo de hooks:
 * -useState()
 * -useContext()
 */

import React, { useState, useContext } from "react";

/**
 *
 * @returns Componente1
 * Dispone de un contexto que va a tener un valor que recibe desde el padre
 */


//Inicializamos un estado vacío que va a rellenarse con los datos del padre
const miContexto = React.createContext(null);

function Componente1() {
  const state = useContext(miContexto);
  return (
    <div>
      <h1>El valor del token es: {state.token}</h1>
      {/* Renderizamos el componente 2 */}
      <Componente2></Componente2>
    </div>
  );
}

function Componente2() {
  const state = useContext(miContexto);

  return (
    <div>
      <h2>La sesión es: {state.sesion}</h2>
    </div>
  );
}

export default function MiComponenteConContexto() {
    
    const estadoInicial = {
        token: 123456,
        sesion: 1
    }

    //Creamos el estado de este componente

    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
            {
                token: 'JWT987654321',
                sesion: sessionData.sesion + 1
            }
        )
    }
    
    return (
        <miContexto.Provider value={sessionData}>
            {/* Todo lo que está aquí dentro puede leer los datos de sessionData */}
            {/* Además si se actualiza, los componentes de aquí también lo actualizan */}
            <h1>**** Ejemplo de useState() y useContext() ****</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar sesión</button>
        </miContexto.Provider>
    )
}