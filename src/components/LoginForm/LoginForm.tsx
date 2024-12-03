// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./LoginForm.css"
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const goToList = () => {
    navigate("/list");
  };
  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01" style={{
            marginTop:"5vh"
        }}>
          <Form.Label style={{ color:"#C65D1A"}}><strong>Email:</strong></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="p.ej.: johnresponsive@gmail.com"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02" style={{
            marginTop:"5vh"
        }}>
          <Form.Label style={{ color:"#C65D1A"}}><strong>Contraseña:</strong></Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Contraseña..."
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>        
      </Row>     
      
      <div className='form-button-container'>
      <Button onClick={goToList}style={{
        backgroundColor: "#C65D1A",
        borderColor: "#C65D1A"
      }}>Iniciar Sesión</Button>
      <Button onClick={goToRegister}style={{
        backgroundColor: "#C65D1A",
        borderColor: "#C65D1A"
      }}>Registrarse</Button>
      </div>    


    </Form>
  );
}

export default LoginForm;