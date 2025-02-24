import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
// import Register from './components/Register.jsx'
// import Login from './components/Login.jsx'
// import Cart from './components/Cart.jsx'
import Detailspizza from './components/Pizza.jsx';

function App() {

  return (
    <div className="w-full 2xl:w-screen overflow-x-hidden">
      <Navbar />
      <Home />
      {/* <Register />
      <Login /> 
      <Cart /> */}
      <Detailspizza />
      <Footer />
    </div>
  );
};

export default App;
