import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Cart.css";
import TacoImg from "../../assets/tacos.jpg";
import { Form } from "react-bootstrap";

function Cart() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="cart-container">
          <div className="cart-orders">
            <Card cardImg={TacoImg} />
            <Card cardImg={TacoImg} />
            <Card cardImg={TacoImg} />
            <Card cardImg={TacoImg} />
          </div>
          <div className="cart-summary">            
            <Form>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label style={{
                    color: "#C65D1A",
                }}><strong>Dirección de envío</strong></Form.Label>
                <Form.Control />
              </Form.Group>
            </Form>
            <div className="cart-subtitle"><strong>Resumen:</strong></div>
            <div className="cart-summary-description">
                <div className="cart-summary-text">
                    <div>Pl</div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
