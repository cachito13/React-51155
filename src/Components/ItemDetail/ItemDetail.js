import './ItemDetail.scss'




const ItemDetail = ({item}) => {

    return (
        
        <div className='detail_container'>
         
            <h2>{item.name}</h2>
            <hr/>
            <img src={item.img} alt={item.name}/>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <bottom className='btn btn-primary'>Comprar</bottom>
        </div>
    )
}

export default ItemDetail