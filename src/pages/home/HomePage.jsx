import React from "react";
import {useHistory, useLocation} from 'react-router-dom'

export default function HomePage() {

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
      <h1>HomePage</h1>
      <div>
          <button onClick={()=> navigate('/profile')}>Ir a Perfil</button>
          <button onClick={goBack}>Go back</button>
          <button onClick={goForward}>Go forward</button>
        </div>
    </div>
  );
};
