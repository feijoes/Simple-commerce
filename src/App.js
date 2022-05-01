import React from "react";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Header from "./components/Header";

function App() {
  
  return (
    <div className="container">
      <Router>
      <Header />
      <div>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/:productId" element={<ProductDetail />} />
          </Routes>
      </div>
      </Router>
    </div>)
  
}

export default App;
