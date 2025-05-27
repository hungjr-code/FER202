import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousels from './Components/Carousels/Carousels';
import AppNavbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';




function App() {

  return (
    <>
        <h1 className="app-title">Orchid store</h1>
        <AppNavbar />
        <Carousels />
        <Home />
        <Footer />
    </>
  );
}
export default App;
