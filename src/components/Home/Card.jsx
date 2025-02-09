const Card = ({ title, price, ingredients, imageUrl }) => {

  return (
    <article className="bg-white rounded-lg overflow-hidden hover:shadow-lg ">
                <img 
            src={imageUrl}
            alt={title}
            className="w-full h-48 overflow-hidden object-cover transform transition-transform"
        />
        <div className="p-6">
            <h3 className="text-2xl text-gray-900 text-center font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">
                <span className="text-gray-800">Ingredientes: </span>
                {ingredients.join(', ')}
            </p>
            <div className="flex flex-col mt-auto items-center gap-4">
                <span className="text-2xl text-gray-700">Precio: <span className="text-orange-600 font-bold">${price}</span></span>
                <div className="flex gap-4">
                    <button className="btn-secondary px-4 py-2 transition-colors ring ring-black hover:ring-gray-900">
                        Ver mas
                    </button>
                    <button className="btn-primary px-4 py-2 transition-colors">
                        Ordenar
                    </button>

                </div>
            </div>
        </div>
    </article>
  );
};

export default Card;