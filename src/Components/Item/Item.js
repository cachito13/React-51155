

export const Item = ( {item} ) => {

    return (
        <div className="col-3 m-2"> 
                <h2>{item.name}</h2>
                <img src={item.img} alt="imagen"/>
                <p>{item.description} </p>
                <p>Precio: ${item.precio} </p>
                <button className='btn btn-primary'>Comprar</button>
         </div>
    )

} 
