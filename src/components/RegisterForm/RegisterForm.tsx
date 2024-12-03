import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <Form
      style={{
        marginTop: "5vh",
      }}
    >
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="johnresponsive@gmail.com" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Dirección</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group controlId="formGridState">
        <Form.Label>Provincia</Form.Label>
        <Form.Select defaultValue="Elige...">
          <option>Las Palmas</option>
          <option>SC de Tenerife</option>
        </Form.Select>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Municipio</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Código Postal</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Button
        variant="primary"
        type="submit"
        onClick={goToLogin}
        style={{
          backgroundColor: "#C65D1A",
          borderColor: "#C65D1A",
          marginTop: "2vh",
        }}
      >
        Crear cuenta
      </Button>
    </Form>
  );
}

export default RegisterForm;
