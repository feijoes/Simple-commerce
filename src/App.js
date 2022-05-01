import React from "react";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>)
  
}

export default App;
