import "./Footer.css";
import RinconLogo from "/el-rincon.png"
import BootstrapLogo from "/bootstrap.png"
import InstagramLogo from "/instagram.webp"
import TwitterLogo from "/twitter.png"
import GithubLogo from "/github.png"
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();  
  const goToHome = () => {
    navigate("/");
  };
  const goToList = () => {
    navigate("/list");
  };
  const goToLogin = () => {
    navigate("/login");
  };
  const goToSub = () => {
    navigate("/subscription");
  };
  const goToCart = () => {
    navigate("/cart");
  };
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-menu">
            <div><strong>Navegación</strong></div>
            <a onClick={goToHome}>Inicio</a>
            <a onClick={goToList}>Menú</a>
            <a onClick={goToLogin}>Login</a>
            <a onClick={goToSub}>Suscripciones</a>
            <a onClick={goToCart}>Carrito</a>
          </div>
          <div className="footer-menu">
            <div><strong>Informacion</strong></div>
            <a>Política de privacidad</a>
            <a>Terminos y condiciones de uso</a>
            <a>Aviso legal</a>
            <a>Devoluciones</a>
          </div>
          <div className="footer-menu">
            <div><strong>Contacto</strong></div>
            <a>cristian@responsive.com</a>
            <a>+34 616071854</a>
          </div>
          <div className="footer-menu">
            <div><strong>Entidades colaboradoras:</strong></div>
            <div className="footer-imgs">
              <a target="_blank" href="https://ieselrincon.es"><img src={RinconLogo} alt="El Rincón"/></a>
              <a target="_blank" href="https://react-bootstrap.netlify.app" ><img src={BootstrapLogo} alt="Bootstrap" id="bootstrap"/></a>
            </div>
          </div>

        </div>
        <div className="titleContainer">
          <h1 id="footerTitle">ResponsiveMeals</h1>
          <div className="footer-socials">
            <a target="_blank" href="https://www.instagram.com/cristian_sin_hxd/"><img src={InstagramLogo} alt="instagram" /></a>
            <a target="_blank" href="https://x.com/RinconGameDevs"><img src={TwitterLogo} alt="twitter" /></a>
            <a target="_blank" href="https://github.com/CrisDeboi"><img src={GithubLogo} alt="github" /></a>
          </div>

        </div>
      </div>
    </>
  );
}

export default Footer;
