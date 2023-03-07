import './Main.scss';



export const Main = ( {greeting} ) => {

    return (
        <div className="container my-5">

            <h2 className = "gretting">{greeting}</h2>
            <p className="list-container__title">Lista de Productos</p>
            <hr/>

            



          {/* <button className='btn btn-danger'>Click me</button> */}

          {/* <Button variant='dark'>Click me</Button>
          <Button variant='light' size='sm'>Click me</Button> */}
        </div>
    )
}

