import { useEffect, useState } from 'react'

const Detailspizza = () => {
    
    const [details, setDetails] = useState({})
    
    const fetchPizza = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/pizzas/p001`)
            const jsonData = await response.json()
            
            setDetails(jsonData)
        } catch (err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
        fetchPizza()
    }, [])
    
    
    return (
        <div className='w-full bg-orange-50 flex justify-center items-center p-16'>
            <div>
                <img className='w-100 rounded-xl' src={details.img} alt={details.name} />
            </div>
            <div className='w-[40vw] flex flex-col justify-center items-start p-6 gap-1'>
                <h3 className='text-2xl text-gray-900 text-center font-bold'>{details.name}</h3>
                <p className='text-gray-700 text-base/5'> 
                    {details.desc}
                    </p>
                <p className="text-gray-700">
                    <strong>Ingredientes: </strong>
                    {Array.isArray(details.ingredients) ? details.ingredients.join(', ') : "No disponibles"}.
                </p>
                <p className="text-gray-700">
                    <strong>Precio: </strong>
                    ${details.price}</p>
                    <button className="btn-primary mt-2 px-4 py-2 transition-colors">
                        Agregar
                    </button>
            </div>
        </div>
    )
}
export default Detailspizza;