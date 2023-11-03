import "./App.scss";
import ListaDeTareas from "./componentes/ListaDeTareas";

function App() {
  return (
     <div className="aplicacion-tareas">
      <div className="tareas-lista-principal">
        <h1>Lista De Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
