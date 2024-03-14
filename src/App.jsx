import { useNavigate } from "react-router-dom";
import { allOrders } from "./constants/orders";
import { allProducts } from "./constants/products";
import './app.css';

const App = () => {
  const totalProducts = allProducts.length;
  const totalOrders = allOrders.length;
  const navigate = useNavigate();

  return (
   <div className="main1">
     <div className="main">
      
      <h1 className="dashh">Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-1 ">
        <div className="bg-blue-600 p-6 rounded-md dash1">
          <p className="title">Total Products</p>
          <p className="text-4xl font-extrabold">{totalProducts}</p>
        </div>
        <div className="bg-green-700 p-6 rounded-md dash2">
          <p className="title">Total Orders</p>
          <p className="text-4xl font-extrabold">{totalOrders}</p>
        </div>
      </div>
      <div className="max-sm:grid mt-6 gap-3">
        <button
          className="bg-cyan-300 text-white px-6 py-3 mx-1 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none btn1"
          onClick={() => navigate("/products")}
        >
          Manage Products
        </button>
        <button
          className="bg-gray-500 text-white px-6 py-3 mx-1 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none btn2"
          onClick={() => navigate("/orders")}
        >
          Manage Orders
        </button>
      </div>
    </div>
   </div>
  );
};

export default App;