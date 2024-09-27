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
        {/* <Search/> */}
      </Router>
    </>
  );
}

export default App;
