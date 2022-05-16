import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

import UserContext from "../../contexts/UserContext";
import { Container } from "./styles";

export default function Login(){
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [disable, setDisable] = useState("");
    const navigate = useNavigate();

    const { setUser } = useContext(UserContext);

    function userLogin(event){
        event.preventDefault();
        setDisable("disable");
        const promise = axios.post(`http://localhost:5000/login`,{
            email,
            password
        });
        
        promise.then(response => {
            setUser(response.data);
            navigate("/"); 
        });
        
        promise.catch(() => {
            alert("Login Error");
            setDisable("");
        });
    }
    return(
        <Container>
                <p>Eletric Driven</p>
                <form onSubmit={userLogin}>
                    <input 
                        type="email" 
                        placeholder="email" 
                        value={email} onChange={e => setEmail(e.target.value)}
                        disabled = {disable}
                        required
                    />
                    <input 
                        type="password" 
                        placeholder="senha" 
                        value={password} onChange={e => setPassword(e.target.value)}
                        disabled = {disable}
                        required 
                    />
                    {disable === "" ? 
                        (<button type="submit">Login</button>) : 
                        (<button type="submit" className="button-disable" disabled = {disable}>wait...</button>)
                    } 
                </form>
                <Link className="link" to="/sign-up">Não tem uma conta? Cadastre-se!</Link>
                <Link className="link" to="/">Voltar para página principal</Link>
            </Container>
        );
}