
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pedirDatos } from '../../helpers/pedirDatos';
import  { ItemList } from '../ItemList/ItemList'
import './ItemListContainer.scss'
import ReactLoading from "react-loading";


export const ItemListContainer = () => {

//(4)una vez creada la promesa y mostrar la accion de la misma, necesitamos 
//la estructura para renderizar y guardar ya que es asincronico
//productos, inicia con un array vacio
const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)
 
// parametros de navegacion
const { categoryId} = useParams()


//(2) y (3) efecto de montaje para que renderizemos el resultado de la promesa una vez que 
//se halla resuelto y en base a esa respuesta pedimos datos
useEffect(()=>{
   setLoading(true)
     // llamamos a la funcion pedir datos que ejecuta una promesa
     // para definir que accion tomar en caso se resuelva o se rechaze la promesa
    pedirDatos()
        .then((res)=>{
            // filtra  y muestra los productos por categoria de MOCK_DATA
            if (categoryId) {
                setProductos( res.filter((prod)=> prod.category === categoryId))
            } else {
         //res : resuelve como el array MOCK_DATA y se lo envia a la variable: setProducto, que luego actualiza Productos
    
                setProductos(res)
            }
           
        })
        .catch((rej)=>{
            console.log(rej)
        })
        .finally(() =>{
            setLoading(false)
        })
    }, [categoryId])
//********************************************************************* */
    

return (
        <div className="container my-5">
            {
                
                loading
                ? (  <div className="spinner-container">
                <ReactLoading type={"bars"} color={"#123abc"} height={50} width={50} />
              </div>)
                : <ItemList items={productos}/> 
            }
        
         </div>    
    )
}

