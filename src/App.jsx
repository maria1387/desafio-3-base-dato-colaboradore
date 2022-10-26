
import "./assets/css/App.css";

import Navbar from "./components/navbar/Navbar";



import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [buscarItem, setBuscarItem] = useState("");

 
  //Estados del formulario


  return (
    <div className="App">
      <Navbar setBuscarItem={setBuscarItem}/>
      <Form buscarItem={buscarItem}/>
      <div>
      

      </div>
    </div>
  );
}

export default App;
