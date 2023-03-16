import { Item } from "../Item/Item"

export const ItemList = ( {items}) =>{

    return(
        <div>
            <p className="list-container__title">Lista de Productos</p>
            <hr className='linea'/>
            {/* (5) para poder visualizar el nuevo array mockdata que esta en la var Productos del 
            Usestate que ya se actualizo, usamos el metodo map que devuelve un nuevo array, 
            y de la siguiente manera lo organizamos en nuestro DOM  */}
                        <div className="row"> 
                            {items.map(producto => <Item key={producto.id} item={producto}/>)}
                            </div>
        </div>
    )
}