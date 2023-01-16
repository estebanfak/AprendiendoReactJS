/**
 * Ejemplo de uso del método ComponentWillUnmount() para componente clase y uso de hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from "react";

export class WillUnmount extends Component {
  componentWillUnmount() {
    console.log('Comportamiento antes que el componente desaparezca');
  }

  render() {
    return (
      <div>
        <h1>WillUnmount</h1>
      </div>
    );
  }
}

export function WillUnmountHook() {

    useEffect(() => {
        return () => {
            console.log('Comportamiento antes que el componente desaparezca');
        };
    }, []);

  return (
    <div>
      <h1>WillUnmount</h1>
    </div>
  );
}
