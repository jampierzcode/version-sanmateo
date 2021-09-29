import React, { useState, useEffect } from "react";
import SidebarDashboard from "../components/sidebarDashboard";
import MaterialTable from "material-table";
import { FaPlus } from "react-icons/fa";
import { DataClientes } from "../components/DataClientes";
// import "../components/IconsMaterialTable";
// ICONOS PARA LA TABLA MATERIAL TABLE
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import axios from "axios";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

// FIN DE ICONOS

const RegisterClients = () => {
  // api de codigos postales
  console.log(DataClientes);
  const [estados, setEstados] = useState([]);

  useEffect(() => {
    async function getEstados() {
      try {
        const resEstados = await axios(
          "https://apisgratis.com/api/codigospostales/v2/entidades/"
        );
        setEstados(resEstados.data);
      } catch (error) {
        console.log(error);
      }
    }
    getEstados();
  }, []);

  // fin de api de codigos postales
  var estados_parser;
  const [navSidebar, setNavSidebar] = useState(true);
  const show_sidebar = () => {
    setNavSidebar(!navSidebar);
  };
  const [show_register, setShow_register] = useState(false);
  const [tabledata, setTableData] = useState(DataClientes);
  const columns = [
    {
      title: "Nombres y Apellidos",
      field: "name",
      defaultSort: "asc",
      filterPlaceholder: "Bucar por nombre",
    },
    { title: "edad", field: "edad", filterPlaceholder: "Bucar por edad" },
    {
      title: "direccion",
      field: "direccion",
      filterPlaceholder: "Bucar por direccion",
    },
    { title: "email", field: "email", filterPlaceholder: "Bucar por email" },
    {
      title: "telefono",
      field: "telefono",
      filterPlaceholder: "Bucar por telefono",
    },
  ];

  //   Formulario
  //  ---- obtencion de los datos por onchange
  //   const [name, setName] = useState("");
  //   const [lastname, seTlastname] = useState("");
  //   const [gener, setGener] = useState("");
  //   const [date, setDate] = useState("");
  //   const [calle, setCalle] = useState("");
  //   const [number_ext, setNumber_ext] = useState("");
  //   const [number_int, setNumber_int] = useState("");
  //   const [municipalidad, setMunicipalidad] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [email, setEmail] = useState("");

  const [datos, setDatos] = useState({
    name: "",
    lastname: "",
    gender: "",
    date: "",
    calle: "",
    number_ext: "",
    number_int: "",
    estado: "",
    municipalidad: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  //   reset formulario y esconder

  const resetForm = () => {
    let form = document.querySelector("#form-cliente");
    form.reset();
  };

  const sendDates = (event) => {
    event.preventDefault();
    console.log(datos);
    event.target.reset();
  };
  console.log(estados);
  // ---- fin de obtencion de los datos por onchange
  return (
    <>
      <SidebarDashboard navSidebar={navSidebar} show_sidebar={show_sidebar} />

      <div
        className={`container-dashboard ${!navSidebar ? "close_sidebar" : ""}`}
      >
        <h1 className="name-link">Mis Clientes</h1>
        <div className="container-registers">
          {!show_register ? (
            <button
              className="btn btn-primary show-register"
              onClick={() => {
                setShow_register(true);
              }}
            >
              Registrar
            </button>
          ) : null}
          {show_register ? (
            <>
              <h1 className="row-title">Datos del paciente</h1>
              <form id="form-cliente" onSubmit={sendDates}>
                <div className="dates-row-4">
                  <div className="group-date">
                    <span>Nombres</span>
                    <input
                      name="name"
                      type="text"
                      className="control-form"
                      placeholder="Ingresa el nombre del paciente"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="group-date">
                    <span>Apellidos</span>
                    <input
                      name="lastname"
                      type="text"
                      className="control-form"
                      placeholder="Ingresa los apellidos del paciente"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="group-date">
                    <span>Genero</span>
                    <select
                      name="gender"
                      id="genero"
                      onChange={handleInputChange}
                    >
                      <option value="0">Hombre</option>
                      <option value="1">Mujer</option>
                    </select>
                  </div>
                  <div className="group-date">
                    <span>Fecha de nacimiento</span>
                    <input
                      name="date"
                      type="date"
                      className="control-form"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="group-date">
                    <span>Calle</span>
                    <input
                      name="calle"
                      type="text"
                      className="control-form"
                      placeholder="Nombre de la calle"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="group-date">
                    <span>Numero exterior</span>
                    <input
                      name="number_ext"
                      type="number"
                      className="control-form"
                      placeholder="Numero exterior"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="group-date">
                    <span>Numero interior</span>
                    <input
                      name="number_int"
                      type="number"
                      className="control-form"
                      placeholder="Numero interior"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="group-date">
                    <span>Estados</span>
                    <select
                      name="estados"
                      id="municipalidad"
                      onChange={handleInputChange}
                    >
                      {console.log(estados.Entidad)}

                      {/* {estados.map((item, index) => {
                        <option value={item.entidad}>{item.entidad}</option>;
                      })} */}
                    </select>
                  </div>
                  <div className="group-date">
                    <span>Municipalidad / Alcaldia</span>
                    <select
                      name="municipalidad"
                      id="municipalidad"
                      onChange={handleInputChange}
                    >
                      <option value="0">OAXCA</option>
                      <option value="1">Ciudad de MXN</option>
                    </select>
                  </div>

                  <div className="group-date">
                    <span>Telefono</span>
                    <input
                      name="phone"
                      type="number"
                      className="control-form"
                      placeholder="Ingresa el numero de telefono"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="group-date">
                    <span>Email</span>
                    <input
                      name="email"
                      type="email"
                      className="control-form"
                      placeholder="Ingresa el @correo electronico"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  id="register"
                  className="btn btn-success show-register"
                >
                  <FaPlus />
                  Registrar
                </button>
                <button
                  id="cancel-register"
                  className="btn btn-secondary show-register"
                  onClick={() => {
                    setShow_register(false);
                    resetForm();
                  }}
                >
                  Cancelar
                </button>
              </form>
            </>
          ) : null}
        </div>

        <MaterialTable
          columns={columns}
          data={tabledata}
          title="Lista de Clientes"
          icons={tableIcons}
          options={{
            filtering: true,
            paging: true,
            pageSizeOptions: [2, 5, 10, 15, 20, 50],
            pageSize: 2,
            paginationType: "stepped",
            showFirstLastPageButtons: false,
            exportButton: true,
            exportAllData: true,
            exportFileName: "Mis Clientes",
            selection: true,
          }}
        />
      </div>
    </>
  );
};

export default RegisterClients;
