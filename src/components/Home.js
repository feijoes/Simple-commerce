import React, {useState} from "react";
import Popup from './Popup';
import Register from './Register'
import Login from "./Login";
import data from '../data';
import Product from "./Product";
const Home = () => {
    const [register, setIsOpen] = useState(false);
    const [login, setLogin] = useState(false);
   
    return <div  className="App container">
      
      <Popup content={<Login />} set={setLogin} name={login}/>
      <Popup content={<Register />}  set={setIsOpen} name={register}/>
      <div className="">
        <main className="block">
          <h2>Products</h2>
          <div className="row">
            {data.map((product) => (
                <Product key={product.id} product={product}></Product>))}
          </div>
        </main>
        <div><h1>gay</h1></div>
      </div>
    </div>
};

export default Home;
