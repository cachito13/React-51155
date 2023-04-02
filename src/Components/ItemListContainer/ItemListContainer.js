
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  { ItemList } from '../ItemList/ItemList'
import './ItemListContainer.scss'
import { Loader } from "../Loader/Loader"
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../Firebase/config';

export const ItemListContainer = () => {

const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)

// parametros de navegacion
const { categoryId} = useParams()


useEffect(()=>{
   setLoading(true)

            //Firebase
         // 1.- armar una referencia (sync)
         const productosRef = collection(db, "productos")
        //filtrado a base de datos para categorias
        const q = categoryId 
        ? query(productosRef, where("category", "==", categoryId))
        : productosRef      
        // 2.- llamar a esa referencia (async)
        getDocs(q)
            .then((res) =>{

                setProductos(res.docs.map((doc)=> { 
                    return {
                        id: doc.id,
                        ...doc.data()
                    }

                }))
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
                ?<Loader/>
                : <ItemList items={productos}/> 
            }
        
         </div>    
    )
}

