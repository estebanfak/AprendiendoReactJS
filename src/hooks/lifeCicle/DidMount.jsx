/**
 * Ejemplo del método de ciclo de vida en componente clase y el hook de ciclo de vida en componente funcional
 */

import React, { Component, useEffect } from 'react'

export class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)');
    }



  render() {
    return (
      <div>
        <h1>
            DidMount
        </h1>
      </div>
    )
  }
}


export function DidMountHook() {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)');

    }, 
    //usando corchetes vacíos [] le indicamos que se va a ejecutar solo 1 vez, si no ponemos nada, se ejecuta todas las veces
    []);



    return (
        <div>
          <h1>
              DidMount
          </h1>
        </div>
      )
}
