import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Administrador from '../pages/Administrador';
import FormularioProducto from '../pages/producto/FormularioProducto';


const RutasAmin = () => {
    return (
        <Routes>
            <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
          <Route exact path="/administrador/crear" element={<FormularioProducto titulo="nuevo producto" creandoProducto={true}></FormularioProducto>}></Route>
          <Route exact path="/administrador/editar/:id" element={<FormularioProducto titulo="editar producto" creandoProducto={false}></FormularioProducto>}></Route>
          
        </Routes>
    );
};

export default RutasAmin;