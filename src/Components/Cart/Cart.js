import './Cart.scss'
import { useContext } from "react"
import  {CartEmpty}  from "../CartEmpty/CartEmpty"
import { CartContext } from "../context/CartContext"



export const Cart = () => {
    const { cart, vaciarCarrito, removerItem, totalCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        //    carrito vacio
        return (
        <CartEmpty/>
        )
        
    }

    return (
//     carrito con productos        
        <div className="container my-5">
                <h2>Carrito de compra</h2>
            <hr/>

            {

                cart.map((item) => (
                <div key={item.id}>
                    <h4>{item.name}</h4>
                    <img alt = ""src={item.img}/>
                    <div>
                        <small>Cantidad:{item.cantidad} </small>
                        <small>Precio un:{item.price} </small>
                        <p>Precio total:{item.price * item.cantidad}</p>
                        <button onClick ={() => removerItem(item.id)} className="btn btn-danger">✖</button>
                        <hr/>
                    </div>
                </div>
            ))
          }
            <h3>Total: {totalCarrito()} </h3>
            <button onClick={vaciarCarrito} className="btn btn-danger m-2">Vaciar carrito</button>
             
                       
          
        </div>
    )
}

