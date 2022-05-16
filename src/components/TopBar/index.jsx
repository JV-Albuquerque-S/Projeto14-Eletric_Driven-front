import { Header, Title, Icons } from "./styles";
import UserContext from "../../contexts/UserContext";
import { React, useContext } from "react";
import { Link } from "react-router-dom";;


export default function TopBar(){
    const { user, setUser } = useContext(UserContext);

    function logout(){
        setUser(null);
        window.location = "/login";
    }

    return(
        <Header>
            <Title>EletricDriven</Title>

            {!user ? 
            (<Icons>
                <p>Você não está logado</p>
                <div className="dropdown">
                    {/* <ion-icon name="cart-outline"></ion-icon> */}
                    <ion-icon className="dropbtn" name="person-circle-outline"></ion-icon>
                    <div className="dropdown-content">
                        <Link className="link" to="/login">Login</Link>
                        <Link className="link" to="/sign-up">Cadastre-se</Link>
                    </div>
                </div>
            </Icons>) : 
            (<Icons>
                <p className="greeting">Olá,  <b>{`${user.name}`}</b></p>
                <div className="right-coner">
                <ion-icon name="cart-outline"></ion-icon>
                <div className="dropdown">
                    <ion-icon className="button" name="person-circle-outline"></ion-icon>
                    <div className="dropdown-content">
                        <Link className="link" to="/user">Página do usuário</Link>
                        <Link className="link" onClick={logout} to="/">Logout</Link>
                    </div>
                </div>
                </div>
            </Icons>)}
            
        </Header>
    )
}