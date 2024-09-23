
import { Navigate } from "react-router-dom";


const RutasProtegidas = ({children}) => {
  // agregar la logica que debe cumplir quien puede ver  los children
  const userAdmin = JSON.parse(sessionStorage.getItem("userKey")) || null;
  // preguntar si no estoy logueado
  if (!userAdmin) {
    // no soy el administrador
    return <Navigate to={"/login"}></Navigate>;
  } else {
    // si soy el administrador
    return children;
  }
};

export default RutasProtegidas;
