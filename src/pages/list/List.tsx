import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./List.css";
import Filter from "../../components/Filter/Filter";
import cardsData from "../../data/cardsData.json";
import Card from "../../components/Card/Card";
import AtunImg from "../../assets/atun.jpg";
import BurgirImg from "../../assets/burgir.jpg";
import SaladImg from "../../assets/ensaladisima.jpg";
import SpaguetisImg from "../../assets/espaguetis.jpg";
import LasagneImg from "../../assets/lasaña.jpg";
import PotatoesImg from "../../assets/papitas.jpg";
import RamenImg from "../../assets/ramen.jpg";
import RavioliImg from "../../assets/ravioli.webp";
import RisottoImg from "../../assets/risotto.webp";
import TacoImg from "../../assets/tacos.jpg";
import TortillaImg from "../../assets/tortilla.jpeg";
import PaellaImg from "../../assets/paella.jpg";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function List() {
  const navigate = useNavigate();  
  const goToCart = () => {
    navigate("/cart");
  };

  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const imagesMap = {
    BurgirImg,
    TacoImg,
    AtunImg,
    SaladImg,
    SpaguetisImg,
    LasagneImg,
    PotatoesImg,
    RamenImg,
    RavioliImg,
    RisottoImg,
    TortillaImg,
    PaellaImg,
  };
  return (
    <>
      <Header />
      <Filter />
      <div className="cardContainer">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            cardPrice={card.cardPrice}
            cardDescription={card.cardDescription}
            cardServing={card.cardServing}
            cardEnergy={card.cardEnergy}
            cardProteins={card.cardProteins}
            cardCarbohydrates={card.cardCarbohydrates}
            cardFats={card.cardFats}
            cardFiber={card.cardFiber}
            cardImg={imagesMap[card.cardImg]}
          />
        ))}
      </div>
      <div className="buttonListContainer">
        <Button
          variant="secondary"
          onClick={handleShow}
          style={{
            backgroundColor: "#C65D1A",
            borderColor: "#C65D1A",
          }}
        >
          Añadir selección
        </Button>
        <Modal show={showModal} onHide={handleClose} centered style={{}}>
          <Modal.Header
            closeButton
            closeVariant=""
            closeLabel="Cerrar"
            style={{ padding: 0 }}
          ></Modal.Header>
          <Modal.Body
            style={{
              backgroundColor: "#FDE1C1",
            }}
          >
            <p>Platos añadidos correctamente a tu carrito</p>
          </Modal.Body>
          <Modal.Footer
            style={{
              display: "flex",
              backgroundColor: "#FDE1C1",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="secondary"
              onClick={handleClose}
              style={{
                backgroundColor: "#C65D1A",
                borderColor: "#C65D1A",
              }}
            >
              Seguir Eligiendo
            </Button>
            <Button
              variant="secondary"
              onClick={goToCart}
              style={{
                backgroundColor: "#C65D1A",
                borderColor: "#C65D1A",
              }}
            >
              Ir al carrito
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default List;
