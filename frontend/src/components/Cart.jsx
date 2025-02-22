import { useState } from "react"
import { pizzaCart } from "../data/pizzas"
import { toast } from 'sonner'
import { CirclePlus, CircleMinus } from 'lucide-react'

const Cart = () => {
    const [cart, setCart ] = useState(pizzaCart)

    const totalCart = () => {
        let total = 0;
        cart.forEach((item) => {
          total += item.price * item.count
        })
        return total
    }

    const increaseCount = (id) => {
        const newCart = cart.map((item) => {
            if (item.id === id){
                return {...item, count: item.count + 1}
            }
            return item
            })
        setCart(newCart)
    }

    const decreaseCount = (id) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
                return {...item, count: item.count - 1}
            }
            return item
        })
        const deletedItem = updatedCart.find(item=> item.count < 1)
        const newCart = updatedCart.filter(item => item.count > 0)
        
        if (newCart.length < cart.length) {
            toast.warning(`La pizza ${deletedItem.name} ha sido eliminado del carrito`)
        }
        
        setCart(newCart)
    }


    return (
        <div className="bg-orange-50 flex flex-col items-center p-40 gap-4">
            <h2 className="text-black text-3xl md:text-4xl font-bold mb-4">Detalles del pedido</h2>
            {cart.map((item) => (
                <div className="w-[60vw] md:w-lg bg-white flex justify-between items-center gap-8 p-4 border-orange-100 rounded-lg shadow-md" key={item.id}>
                    <div className="flex items-center gap-3">
                    <img 
                    src={item.img}
                    alt={item.name}
                    width={50}
                    height={50}
                    />
                    <h3 className="text-gray-900 text-md md:text-xl font-bold">{item.name}
                    </h3>
                    </div>
                    <div className="flex gap-4 items-center">
                    <p className="text-gray-500 mr-2">${item.price.toLocaleString()}</p>
                    <CircleMinus className="btn-decrease" onClick={() => decreaseCount(item.id)}/>
                    <span className="text-gray-800">{item.count}</span>
                    <CirclePlus className="btn-increase" onClick={() => increaseCount(item.id)}/>
                    </div>
                </div>
            ))}
            <h2 className="text-gray-900 text-xl font-bold">Total: <span className="text-orange-600 font-bold">
                ${totalCart().toLocaleString()}
                </span>
            </h2>
            <button className="btn-pay">Pagar</button>
        </div>
    );
}

export default Cart;