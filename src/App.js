import './App.css';
import Search from './Nav/Search';
import Navbar from './Nav/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  // Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Search/>
        {/* <Header CartItem={CartItem} /> */}
        <Routes>
          {/* <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route> */}
          {/* <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
