import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

export default function About() {

  const location = useLocation();
  const history = useHistory();
  console.log('Estamos en la ruta: ', location.pathname);

  const navigate = (path) =>{
    history.push(path);
  }

  const goBack = ()=>{
    history.goBack();
  }

  const goForward = ()=>{
    history.goForward()
  }


  return (
    <div>
        <h1>About | FAQs</h1>
        <div>
          <button onClick={()=> navigate('/')}>Go home</button>
          <button onClick={goBack}>Go back</button>
          <button onClick={goForward}>Go forward</button>
        </div>
    </div>
  )
}
