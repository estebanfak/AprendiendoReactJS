import React, {useRef} from 'react'

export default function Child({name, send, update}) {

    const messageRef = useRef('');
    const nameRef = useRef('');

    function pressButton(){
        const text = messageRef.current.value;
        alert(`Text in input: ${text}`);
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }
    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value)
    }



  return (
    <div style={{background: 'cyan', padding:'30px'}}>
        <p onMouseOver={()=> console.log('Mouse over')}>{name}</p>
        <button onClick={()=> console.log('Botón 1 pulsado')}>Botón 1</button>
        <button onClick={pressButton}>Botón 2</button>
        {/* Si intentamos ejecutar la función con parametros de la forma que está abajo, se va a ejecutar automáticamente al cargar la página y nos puede romper 
        la página al intentar hacer iteraciones.... */}
        {/* <button onClick={pressButtonParams('Hola')}>Botón 3</button> */}

        {/* ... por lo tanto, cuando la función recibe parámetros, debemos ejecutarla dentro de una función anónima  */}
        <button onClick={()=>pressButtonParams(`Hola ${name}`)}>Botón 3</button>
        <input 
        placeholder='Insert a text  to send' 
        onFocus={()=> console.log('Input Focused')} 
        onChange={(e)=> console.log('Input changed: ', e.target.value)}
        onCopy={()=> console.log('Copied text from input')}
        ref={messageRef}
        />
        <button onClick={()=> send(messageRef.current.value)}>
            Send message
        </button>
        <div style={{marginTop: '20px'}}>
            <form onSubmit={submitName}>
                <input placeholder='New name' ref={nameRef}/>
                <button type='submit'>Update name</button>
            </form>
        </div>
    </div>
  )
}
