import React from 'react'
import { useHistory } from 'react-router-dom';

function ProfilePage({user}) {

    const history = useHistory();
  
    const navigate = (path) =>{
      history.push(path);
    }

  return (
    <div>
        <h1>Tu Perfil</h1>
        <button onClick={()=> navigate('/tasks')}>Tus tareas</button>
        <div>
          <button onClick={()=> navigate('/')}>Go home</button>
        </div>
    </div>
  )
}

export default ProfilePage