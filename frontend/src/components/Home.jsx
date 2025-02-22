import Header from './Home/Header.jsx'
import Card from './Home/Card.jsx'
import { pizzas } from '../data/pizzas.js'

function Home() {
  return (
    <div className='w-full'>
      <Header  />
      <div className='bg-orange-50 flex flex-col justify-center items-center'>
      <h2 className='text-4xl font-bold text-center text-gray-900 mt-12'>Nuestras Pizzas</h2>
      <section className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-18 md:px-12
      py-12'>

        {pizzas.map((pizza) => 
          <Card 
          key={pizza.id}
          title={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          imageUrl={pizza.img}
          />
          )}
      </section>
      </div>
    </div>
  );
};

export default Home;