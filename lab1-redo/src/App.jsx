import './App.css';
import Footer from './components/Functional/Footer/Footer';
import OrchidView from './components/OrchidView';
import Navigation from './components/Functional/Navigation/Navigation';
import Header from './components/Functional/Header/Header';
function App() {
  return (
    <div className='App'>
      <Header/>
      <Navigation/>
      <OrchidView/>
      <Footer/>
    </div>
  );
}
export default App;
