import './item.scss'
import { Link } from "react-router-dom"

export const Item = ( {item} ) => {

    return (
        <div className="col-3 m-2"> 
                <h2 className='producto_titulo'>{item.name}</h2>
                <img src={item.img} alt="imagen"/>
            
                <p>Precio: ${item.price} </p>
                <p><small>Categoria: {item.category} </small></p>
                <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
         </div>
    )

} 
