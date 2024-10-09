import React from 'react';
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import { CardFooter } from "react-bootstrap";
import DetalleProducto from '../DetalleProducto';
const CardProducto = ({producto}) => {
    return (
        
        <div className="my-2 col-12 col-sm-6 col-md-4 col-lg-3">
            <Card>
              <Card.Img variant="top" src={producto.imagen} className='img-fluid imgProdu'/>
              <Card.Body className='cardProdu d-flex flex-column flex-grow-1 justify-content-between'>
                <h5 className="verdeOscuro">{producto.nombreProducto} </h5>
                <Card.Text>
                  {producto.descripcion_breve}
                </Card.Text>
                <div>
                  <b>${producto.precio} </b>
                </div>
              </Card.Body>
              <CardFooter>
                <div className="text-end">
                  <Link
                    to={`./DetalleProducto/${producto._id}`}
                    className="btn btn-success"
                  >
                    Ver detalle
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
    );
};

export default CardProducto;