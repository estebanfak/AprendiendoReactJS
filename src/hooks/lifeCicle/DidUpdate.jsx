/**
 * Ejemplo de uso de método componente DidUpdate en componente clase y uso de Hook en componente funcional
 */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos props o cambia su estado');
    }

  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
    </div>
    )
  }
}




export function DidUpdateHook() {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambia su estado');

    });//Sin corchetes [] para que se ejecute cada vez que haya cambios en el estado

    return (
        <div>
          <h1>DidUpdate</h1>
      </div>
      )
}
