import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI } from "../../../helpers/queries";
const ItemProducto = ({ producto, fila }) => {
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
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" onClick={borrarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
