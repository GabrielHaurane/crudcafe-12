const URLProducto = import.meta.env.VITE_API_PRODUCTO;

//Peticiones o solicitudes

//GET
export const leerProductosAPI = async () => {
    try {
        const respuesta = await fetch(URLProducto)
        return respuesta;
    } catch (error) {
        console.error(error)
        return false;
    }
}
//PUT o PATH

//POST
export const crearProductoAPI = async(productoNuevo)=>{
    try {
        const respuesta = await fetch(URLProducto,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(productoNuevo)
        })
        console.log(respuesta);
        return respuesta;
    } catch (error) {
        console.error(error)
        return false;
    }
}
//DELETE
export const borrarProductoAPI = async(id)=>{
    try {
     const respuesta = await fetch(URLProducto+'/'+id,{
         method: "DELETE"
     })
     console.log(respuesta);
     return respuesta;
    } catch (error) {
     console.error(error)
     return false;
    }
 }