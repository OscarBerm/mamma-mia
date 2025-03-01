import './App.css'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Cart from './components/Cart.jsx'

function App() {

  return (
    <div className="w-full 2xl:w-screen overflow-x-hidden">
      <Navbar />
      {/* <Home />
      <Register />
      <Login />  */}
      <Cart />
      <Footer />
    </div>
  );
};

export default App;
