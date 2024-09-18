import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI, leerProductosAPI } from "../../../helpers/queries";
import { Link } from "react-router-dom";
const ItemProducto = ({ producto, fila, setListaProductos }) => {
  const borrarProducto = () => {
    Swal.fire({
      title: "estas seguro de borrar el producto?",
      text: "no puedes revertir la operacion",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar"
    }).then(async(result) => {
      if (result.isConfirmed) {
        // pedir a la api borrar el producto
        const respuesta = await borrarProductoAPI(producto.id)
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Producto eliminado",
            text: `el producto ${producto.nombreProducto}, fue borrado correctamente`,
            icon: "success"
          });
          // actualizar el state del administrador
          const productoAPI = await leerProductosAPI();
          if (productoAPI.status === 200) {
            const productosActualizados = await productoAPI.json()
            setListaProductos(productosActualizados)
          } 
          // setListaProductos

        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `el producto ${producto.nombreProducto}, no fue borrado. intente mas tarde`,
            icon: "error"
          });
        }
      }
    });
  };
  

  return (
    <tr>
      <td className="text-center">{fila}</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-end">${producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-thumbnail"
          alt={producto.nombreProducto}
        ></img>
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Link className="btn btn-primary me-lg-2"  to={`/administrador/editar/${producto.id}`} variant="warning">
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={borrarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
