import React from "react";
import "../styles/registro.css";

const Registros = () => {
  return (
    <>
      <div className="container-dashboard">
        <h1 className="name-link">Alta de orden de trabajo</h1>
        <div className="container-registers">
          <h1 className="row-title">Datos del paciente</h1>
          <div className="dates-row-4">
            <div className="group-date">
              <span>Nombres</span>
              <input
                type="text"
                className="control-form"
                placeholder="Ingresa el nombre del paciente"
              />
            </div>
            <div className="group-date">
              <span>Apellidos</span>
              <input
                type="text"
                className="control-form"
                placeholder="Ingresa los apellidos del paciente"
              />
            </div>
            <div className="group-date">
              <span>Genero</span>
              <select name="genero" id="genero">
                <option value="H">Hombre</option>
                <option value="M">Mujer</option>
              </select>
            </div>
            <div className="group-date">
              <span>Fecha orden</span>
              <input type="date" className="control-form" />
            </div>
            <div className="group-date">
              <span>Fecha de nacimiento</span>
              <input type="date" className="control-form" />
            </div>
            <div className="group-date">
              <span>Telefono</span>
              <input
                type="number"
                className="control-form"
                placeholder="Ingresa el numero de telefono"
              />
            </div>
            <div className="group-date">
              <span>Medico</span>
              <input
                type="text"
                className="control-form"
                placeholder="Nombre del medico"
              />
            </div>
            <div className="group-date">
              <span>Empresa</span>
              <input
                type="text"
                className="control-form"
                placeholder="Nombre de la empreesa"
              />
            </div>
          </div>
        </div>
        {/* <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Folio</th>
              <th scope="col">Fecha</th>
              <th scope="col">Hora</th>
              <th scope="col">Cliente</th>
              <th scope="col">Test</th>
              <th scope="col">Costo</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>100</td>
              <td>25/11/2021</td>
              <td>09:15 - 8s</td>
              <td>Jampier Smith Vasquez Mija</td>
              <td>Prueba antigena de Covid 19</td>
              <td>$/60.00</td>
              <td>Evaluado</td>
            </tr>

            <tr>
              <th scope="row">1</th>
              <td>100</td>
              <td>25/11/2021</td>
              <td>09:15 - 8s</td>
              <td>Jampier Smith Vasquez Mija</td>
              <td>Prueba antigena de Covid 19</td>
              <td>$/60.00</td>
              <td>Evaluado</td>
            </tr>

            <tr>
              <th scope="row">1</th>
              <td>100</td>
              <td>25/11/2021</td>
              <td>09:15 - 8s</td>
              <td>Jampier Smith Vasquez Mija</td>
              <td>Prueba antigena de Covid 19</td>
              <td>$/60.00</td>
              <td>Evaluado</td>
            </tr>

            <tr>
              <th scope="row">1</th>
              <td>100</td>
              <td>25/11/2021</td>
              <td>09:15 - 8s</td>
              <td>Jampier Smith Vasquez Mija</td>
              <td>Prueba antigena de Covid 19</td>
              <td>$/60.00</td>
              <td>Evaluado</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </>
  );
};

export default Registros;
