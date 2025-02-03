import Header from './Home/Header.jsx'
import Card from './Home/Card.jsx'

function Home() {
  return (
    <div className=''>
      <Header  />
      <div className='bg-orange-50 flex flex-col justify-center items-center'>
      <h2 className='text-4xl font-bold text-center text-black mt-12'>Nuestras Pizzas</h2>
      <section className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-18 md:px-12
      py-12'>
        <Card
            title="Napolitana"
            price={5950}
            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
            imageUrl="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9
080-784dcc87ec2c"
        />
        <Card
            title="Española"
            price={6950}
            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
            imageUrl="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-
a1c6-8c57bc388fab"
        />
        <Card
            title="Pepperoni"
            price={5950}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            imageUrl="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-
ac54-90f6c31eb3e3"
        />
      </section>
      </div>
    </div>
  );
};

export default Home;