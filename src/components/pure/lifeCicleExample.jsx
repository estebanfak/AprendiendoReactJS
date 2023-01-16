/**
 * Ejemplo de componente de tipo clase que dispone de los
 * métodos de ciclo de vida
 */

import React, { Component } from 'react'

class LifeCycleExample extends Component {
    
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia un componente');
    }
    
    componentWillMount() {
        console.log('WILL_MOUNT: Antes del montaje del componente');
    }
    
    componentDidMount() {
        console.log('DID_MOUNT: Luego del montaje del componente, antes de renderizarlo (pintarlo)');
    }

    componentWillReceiveProps(nextProps) {
        console.log('WILL_RECIEVE_PROPS: Si va a recibir nuevas props');
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Sirve para controlar si el componente debe o no actualizarse
        */
       
       //return true / false
    }
    
    componentWillUpdate(nextProps, nextState) {
        console.log('WILL_UPDATE: Justo antes de actuializarse');
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('DID_UPDATE: Justo después de actuializarse');
    }
    
    componentWillUnmount() {
        console.log('WILL_UNMOUNT: Justo antes de desaparecer');
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

LifeCycleExample.propTypes = {

}

export default LifeCycleExample
