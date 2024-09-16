const URLProducto = import.meta.env.VITE_API_PRODUCTO
// peticiones o solicitudes

// GET
// PUT O PATH
// DELETE

// POST
export const crearProductoAPI = async(productoNuevo)=>{
try {
    const respuesta = await fetch(URLProducto,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(productoNuevo)
    })

} catch (error) {
    console.error(error)
}
}