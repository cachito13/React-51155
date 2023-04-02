import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.scss'
import { Link } from "react-router-dom"
import { Loader } from "../Loader/Loader"


export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

   
    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem( res.find((prod) => prod.id === Number(itemId)) )
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

