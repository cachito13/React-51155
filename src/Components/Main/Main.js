import './Main.scss';



export const Main = ( {greeting} ) => {

    return (
        <div className="container my-5">

            <h2 className = "gretting">{greeting}</h2>
            <p className="list-container__title">Lista de Productos</p>
            <hr className='linea'/>

        </div>
    )
}

