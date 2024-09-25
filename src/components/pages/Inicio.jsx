import React, { useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";
import CardProducto from "./producto/CardProducto";
const Inicio = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    obtenerProductos()
  }, []);

  const obtenerProductos = async () => {
    try {
      const datos = await leerProductosAPI();
      if(datos.status ===200){
        const prod = await datos.json()
        setProductos(prod)
        
      }
    } catch(err) {
      console.log(err)
    }
  };

  return (
    
    <div className="maquetadosPaginas">
      <div className="container">
        <h2>Nuestros Productos</h2>
        <div className="row">
          {
            productos.map((producto,index)=>(
              <CardProducto key={index} producto={producto} ></CardProducto>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Inicio;