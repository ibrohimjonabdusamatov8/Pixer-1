
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Working from './components/Working/Working';
import Order from './components/Order/Order';
import Footer__topp from './components/Order/Footer__topp/Footer__topp';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Working></Working>
      <Order></Order>
       <Footer__topp></Footer__topp>
       <Footer></Footer>

    </div>
  );
}

export default App;
