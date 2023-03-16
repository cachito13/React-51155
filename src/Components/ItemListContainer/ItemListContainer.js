
import { useEffect, useState } from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';
import  { ItemList } from '../ItemList/ItemList'
import './ItemListContainer.scss'





export const ItemListContainer = () => {

//(4)una vez creada la promesa y mostrar la accion de la misma, necesitamos 
//la estructura para renderizar y guardar ya que es asincronico
//productos, inicia con un array vacio
const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)
 

//(2) y (3) efecto de montaje para que renderizemos el resultado de la promesa una vez que 
//se halla resuelto y en base a esa respuesta pedimos datos
useEffect(()=>{
     // llamamos a la funcion pedir datos que ejecuta una promesa
     // para definir que accion tomar en caso se resuelva o se rechaze la promesa
    pedirDatos()
        .then((res)=>{
    //res : resuelve como el array MOCK_DATA y se lo envia a la variable: setProducto, que luego actualiza Productos
            setProductos(res)
        })
        .catch((rej)=>{
            console.log(rej)
        })
        .finally(() =>{
            setLoading(false)
        })
    })
//********************************************************************* */
    

return (
        <div className="container my-5">
            {
                
                loading
                ? <h2>Cargando....</h2>
                : <ItemList items={productos}/> 
            }
        
         </div>    
    )
}

