import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import Select from '../Select/Select'
import SelectColor from '../Select/SelectColor'
import {CartContext} from '../../Components/context/CartContext'


const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isIncart } = useContext(CartContext)
    console.log(isIncart(item.id) )
    const [cantidad, setCantidad] = useState(1)
    const [talle, setTalle] = useState("small")
    const [color, setColor]=useState("blanco")

    const handleAgregar = () =>{
        const newItem ={
            ...item,
            cantidad,
            talle,
            color
        }
        agregarAlCarrito(newItem)
    }
 
  
  
    return (
        
        <div className='detail_container'>
         
            <h2>{item.name}</h2>
            <hr/>
            <img src={item.img} alt={item.name}/>
            <p>{item.description}</p>
            {item.stock === 1 ? <p><strong>¡Queda solo 1 unidad!</strong></p> : item.stock <= 5 ? <p><strong>Quedan solo {item.stock} unidades!</strong></p> : null}
            <p>Precio: ${item.price}</p>

                {
                       isIncart(item.id)
                       ?   <Link to="/cart" className='btn btn-primary'>Terminar compra</Link>
                       :   <ItemCount
                               max={item.stock}
                               cantidad={cantidad}
                               setCantidad={setCantidad}
                               agregar={handleAgregar}
                           />

                }

            <Select set={setTalle} />
            <SelectColor set={setColor} />

       
        </div>
    )
}

export default ItemDetail