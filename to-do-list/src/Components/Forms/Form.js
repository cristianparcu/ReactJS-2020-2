import React from "react";
import "../../App";
import Formulario from "./Form.module.css";
import List from "./list";

//document.getElementById('formT').addEventListener('submit', AddTask);

function AddTask() {
  //let task = document.getElementById("input").value;
  let id = 1;

  const tasks = {
 //   task,
    id,
  };

}
const Forms = () => {
  return (
    <div>
      <form className={Formulario.form} id="formT">
        <h2 className={Formulario.myh2}>Ingresar: </h2>
        <input
          type="text"
          id="input"
          placeholder="Ingrese la actividad"
          className={Formulario.input}
        />
        <button type="submit" className={Formulario.button} onClick={AddTask()}>
          Añadir
        </button>
        <List />
      </form>
    </div>
  );
};
export default Forms;
