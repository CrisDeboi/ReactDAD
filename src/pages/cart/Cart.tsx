import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Cart.css";
import TacoImg from "../../assets/tacos.jpg";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CardCart from "../../components/CardCart/CardCart";


function Cart() { 
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const goToSub = () => {
    navigate("/subscription");
  };

  const totalPlatos = cartItems.reduce((acc, item) => acc + item.cardPrice * item.count, 0); 
  let gastosEnvio = 5.95;  
  let totalPrecio = totalPlatos + gastosEnvio;  
  const totalPlatosFormateado = totalPlatos.toFixed(2); 
  const totalPrecioFormateado = totalPrecio.toFixed(2); 
  return (
    <>
      <Header />      
      <div className="container">
        <div className="cart-container">
        <div className="cart-orders">         

            
            {cartItems.map((item) => (
              
              <CardCart
                key={item.id}
                cardImg={item.cardImg}
                cardQuantity={item.count}
              />
            ))}
          </div>
          <div className="cart-summary">
            <Form>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label style={{
                  color: "#C65D1A",
                }}><strong>Dirección de envío:</strong></Form.Label>
                <Form.Control />
              </Form.Group>
            </Form>
            <div className="cart-subtitle"><strong>Resumen:</strong></div>
            <div className="cart-summary-description">
              <div className="cart-summary-text">
                <div><strong>Platos:</strong></div>
                <div><strong>Gastos de envío:</strong></div>
                <div><strong>Total:</strong></div>
              </div>
              <div className="cart-summary-prices">
                <div><strong>{totalPlatosFormateado}€</strong></div>
                <div><strong>{gastosEnvio}€</strong></div>
                <div><strong>{totalPrecioFormateado}€</strong></div>
              </div>
            </div>
            <div className="cart-summary-button-container">
              <Button variant="primary" style={{ backgroundColor: "#C65D1A", borderColor: "#C65D1A" }}>Comprar</Button>
            </div>
            <div className="cart-summary-advertisement">¿Aún no tienes una suscripción activa?</div>
            <div className="cart-summary-button-container">
              <Button variant="primary" onClick={goToSub} style={{ backgroundColor: "#C65D1A", borderColor: "#C65D1A", width: "35vw" }}>Gestionar suscripción</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
