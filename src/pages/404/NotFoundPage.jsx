import React from 'react'
import { useHistory } from 'react-router-dom'

function NotFoundPage() {

    const history = useHistory();

    const navigate = (path) => {
        history.push(path);
    }

  return (
        <div>
            <h1>404 Page not found</h1>
            <div>
          <button onClick={()=> navigate('/')}>Go home</button>
        </div>
        </div>
    )
}

export default NotFoundPage