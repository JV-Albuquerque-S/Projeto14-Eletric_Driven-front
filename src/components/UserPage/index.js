import { React, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

import UserContext from "../../contexts/UserContext";
import { Container } from "./styles";
import TopBar from "../TopBar";

export default function UerPage(){
    const [ userData, setUserData ] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
	
    const navigate = useNavigate();

    const { user } = useContext(UserContext);

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }


    useEffect(() => {
        const request = axios.get("http://localhost:5000/user", config)
        request.then(response => {
            console.log(response.data);
            setUserData(response.data);
            setEmail(response.data.email);
            setName(response.data.name);
            setPhone(response.data.phone);
        })
    }, []);

    function deleteUser(event){
        event.preventDefault();
        const promise = axios.delete(`http://localhost:5000/delete-user`, config);
        promise.then(response => {
            navigate("/login"); 
        });
        
        promise.catch(() => {
            alert("Error ao deltar usuário");
        });
    }
    return(
        <>
        <TopBar />
        <Container>
            <p>Dados Do usuário:</p>
            <ul>
                <li>Nome:  {`${name}`}</li>
                <li>Email:  {`${email}`}</li>
                <li>Telefone:  {`${phone}`}</li>
            </ul>

            <button onClick={deleteUser}>Deletar conta do Usuário</button>
            <div className="links">
                <Link className="link" to="/">Voltar para página principal</Link>
            </div>
            
        </Container>
        </>
        );
}