import React, {useState} from "react";

import data from '../data';
import Product from "./Product";
import Filter from "./Filter";

const Home = () => {
    const [products, setfilter] = useState(data)
    
    return <div  className="App container">
     
     
      <div className="">
        <main className="block">
          <h3>Products</h3>
          <div className="row">
            <Filter name="All"   set={setfilter} value="all"/>
            <Filter name="Moda"  set={setfilter} value="moda"/>
            <Filter name="Tecnologia"  set={setfilter} value="tecnologia"/>
            <Filter name="Otro" set={setfilter} value="other"/>
          </div>
          <div className="container main-content">
            {products.map((product) => (
                <Product key={product.id} product={product}></Product>))}
          </div>
        </main>
      </div>
    </div>
};

export default Home;
