/**
 * Ejemplo de uso de:
 * -useState()-----> lo usamos para modificar estados privados dentro de los componentes
 * -useRef()-------> sirve para referenciar elementos dentro de la vista
 * -useEffect() ---> lo usamos para controlar los cambios en la vista, también para el ciclo de vida de los componentes
 */

import React, {useState, useRef, useEffect} from 'react'
// import PropTypes from 'prop-types'

function Ejemplo2(props) {

    // Vamos a crear 2 contadores distintos, cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar una variable con un elemento del DOM del componente (vista HTML)
    // (es como usar el Document.getElementBy())
    const miRef = useRef();

    function incrementarContador1() {
        setContador1(contador1 + 1);
    }

    function incrementarContador2() {
        setContador2(contador2 + 1);
    }

    /**
     * Trabajando con useEffect()
     */

    /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * Cada vez que haya una cambio en el estado del componente, se ejecuta aquello que esté dentro del useEffect()
     */

    // useEffect(() => {
        // console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        // console.log('Mostrando referencia al elemento del DOM');
        // console.log(miRef);
    // });

    /**
     * ? Caso 2: Ejecutar SOLO cuando cambie contador1
     * Cada vez que haya un cambio en contador1, se ejecuta lo que diga  el useEffect()
     * Si cambia el contador2, no habrá ejecución
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR1');
    //     console.log('Mostrando referencia al elemento del DOM');
    //     console.log(miRef);
    // }, [contador1]);

    /**
     * ? Caso 3: Ejecutar SOLO cuando cambie contador1 o contador2
     * Cada vez que haya un cambio en contador1, se ejecuta lo que diga  el useEffect()
     * Cada vez que haya un cambio en contador2, se ejecuta lo que diga  el useEffect()
     */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR1 / CONTADOR2');
        console.log('Mostrando referencia al elemento del DOM');
        console.log(miRef);
    }, [contador1, contador2]);


  return (
    <div>
        <h1>*** Ejemplo de useState, useRef y useEffect ***</h1>
        <h2>Contador1: {contador1}</h2>
        <h2>Contador2: {contador2}</h2>
        {/* Elemento referenciado */}
        <h4 ref={miRef}>
            Ejemplo de elemento referenciado
        </h4>
        {/* Botones para cambiar los contadores */}
        <div>
            <button onClick={incrementarContador1}>Incrementar contador 1</button>
            <button onClick={incrementarContador2}>Incrementar contador 2</button>
        </div>
    </div>
  )
}


export default Ejemplo2
