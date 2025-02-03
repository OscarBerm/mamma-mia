import './App.css'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <div className="w-full">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
