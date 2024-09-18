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
export const buscarProductoAPI = async(id)=>{
    try {
        const respuesta = await fetch(URLProducto+'/'+id)
        return respuesta
    } catch (error) {
        return false;
    }
}
//PUT o PATH
export const editarProductoAPI = async(productoEditado, id)=>{
    try {
        const respuesta = await fetch(URLProducto+'/'+id,{
            method: "PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(productoEditado)
        })
        return respuesta;
    } catch (error) {
        console.error(error)
        return false;
    }
}

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

// LOGIN
const userAdmin ={
    email: "admin@admin.com",
    password: "123456678"
}

export const login = (usuario)=>{
    if (usuario.email === userAdmin.email && usuario.password === userAdmin.password) {
        sessionStorage.setItem('userKey', JSON.stringify(userAdmin.email));
        return true
    } else {
        return false
    }
}