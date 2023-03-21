import { Item } from "../Item/Item"

export const ItemList = ( {items}) =>{

    return(
        <div>
            <h2><strong>Lista de Productos</strong></h2>

            <hr className='linea_sep'/>
            {/* (5) para poder visualizar el nuevo array mockdata que esta en la var Productos del 
            Usestate que ya se actualizo, usamos el metodo map que devuelve un nuevo array, 
            y de la siguiente manera lo organizamos en nuestro DOM  */}
                        <div className="row"> 
                            {items.map(producto => <Item key={producto.id} item={producto}/>)}
                            </div>
        </div>
    )
}