import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { buscarProductoAPI } from "../../helpers/queries";
const DetalleProducto = () => {
  const {id} = useParams()
  const [producto,setProducto]=useState({})
  useEffect(()=>{
    const encontrarProds = async()=>{
      const data = await buscarProductoAPI(id)
      const prod = await data.json()
      setProducto(prod)
    }
    encontrarProds()
  },[])

  return (
    <div className="maquetadosPaginas">
      <Card>
        <Card.Body>
          <div className="row">
            <div className="col-2">
              <img className="w-100" src={producto.imagen} />
            </div>
            <div className="col-10">
          <Card.Title>{producto.nombreProducto} ${producto.precio} </Card.Title>
          <Card.Text>
            {producto.descripcion_amplia}
          </Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DetalleProducto;