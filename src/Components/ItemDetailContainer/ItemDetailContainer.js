import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.scss'
import { Link } from "react-router-dom"
import { Loader } from "../Loader/Loader"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../Firebase/config"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
   
    const { itemId } = useParams()

   
    useEffect(() => {
        setLoading(true)
        //Firebase
        //1-armo la ref (syn)
        const docRef = doc(db, "productos", itemId)

        //2-llamo a la ref(asyn)
        getDoc(docRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
               
            })

            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div className="container my-5">
              <div className="detail_titulo">
                <h2>Detalle </h2>
                <Link to ="/"> <h2>❌</h2></Link>
                             
            </div>
            <hr/>
            {
                loading
                    ? <Loader/>
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}

