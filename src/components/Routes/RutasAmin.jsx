import React from "react";
import { Routes, Route } from "react-router-dom";
import Administrador from "../pages/Administrador";
import FormularioProducto from "../pages/producto/FormularioProducto";

const RutasAmin = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Administrador></Administrador>}
      ></Route>
      <Route
        exact
        path="/crear"
        element={
          <FormularioProducto
            titulo="nuevo producto"
            creandoProducto={true}
          ></FormularioProducto>
        }
      ></Route>
      <Route
        exact
        path="/editar/:id"
        element={
          <FormularioProducto
            titulo="editar producto"
            creandoProducto={false}
          ></FormularioProducto>
        }
      ></Route>
    </Routes>
  );
};

export default RutasAmin;
