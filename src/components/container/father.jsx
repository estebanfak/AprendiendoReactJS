import React, {useState} from 'react'
import Child from '../pure/child'

export default function Father() {

    const [name, setName] = useState('Esteban');
    // Generamos ésta función y queremos que el child ejecute ésta función cuando pase 'algo', o sea, que un componente hijo ejecute una función declarada en el padre
    function showMessage(text) {
        alert(`Message recieved: ${text}`)
    }

    function changeName(newName) {
        setName(newName)
    }


  return (
    <div style={{background: 'tomato', padding: '10px'}}>
        <Child name={name} send={showMessage} update={changeName}></Child>
    </div>
    )
}
