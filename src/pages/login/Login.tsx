import Header from "../../components/Header/Header";
import "./Login.css";
import LoginImg from "../../assets/login.png"
import LoginForm from "../../components/LoginForm/LoginForm";

function Login(){   

    return(
        <>
        <Header/>        
        
        <div className="container">
            <div className="login-logo">

                <img src={LoginImg} alt="vaya fiera" />
            </div>
            <LoginForm/>
            
        </div>
        
        
        </>
    )
}

export default Login;