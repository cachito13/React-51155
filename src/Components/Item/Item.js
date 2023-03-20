

export const Item = ( {item} ) => {

    return (
        <div className="col-3 m-2"> 
                <h2>{item.name}</h2>
                <img src={item.img} alt="imagen"/>
                <p>{item.description} </p>
                <p>Precio: ${item.precio} </p>
                <p><small>Categoria: {item.category} </small></p>
                <button className='btn btn-primary'>Ver Mas</button>
         </div>
    )

} 
