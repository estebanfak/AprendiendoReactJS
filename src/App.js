import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import Father from './components/container/father';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Aquí pongo mi componente creado */}
        {/* la propiedad name que le paso es la que va al constructor de la clase Greeting, y la puedo usar en dicha clase*/}
        {/* <Greeting name={"Esteban"}></Greeting>  */}

        {/* Llamado al componente de tipo funcion poniendo como parametro name */}
        {/* <GreetingF name={"Esteban"}></GreetingF> */}

        {/* <TaskListComponent></TaskListComponent> */}

        {/* Ejemplo de uso de Hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}

        {/* <MiComponenteConContexto></MiComponenteConContexto> */}

        {/* Todo lo que dentro de las etiquetas <Ejemplo4> (AQUÍ) </Ejemplo4> es tratado como  props.children */}
        {/* <Ejemplo4 nombre='Esteban' pepe='palangana'>
          <h3>
            Contenido del props.children
          </h3>
          <p>hoal</p>
        </Ejemplo4> */}

        {/* <GreetingStyled name='Esteban'></GreetingStyled> */}

        {/* Gestion de eventos */}
        <Father></Father>
      {/* </header> */}
    </div>
  );
}

export default App;
