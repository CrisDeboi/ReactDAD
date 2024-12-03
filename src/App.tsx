import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Subscription from "./pages/subscription/Subscription";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/list" element={<List/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/subscription" element={<Subscription/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  );
}

export default App;