import { React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Container } from "./styles";


export default function SignUp(){
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
   

    function registerUser(event){
        event.preventDefault();
        const promise = axios.post(`http://localhost:5000/sign-up`, {
            name: name,
            email: email,
            password: password,
            phone: phone
        });

        promise.then((response) => {
            console.log(response.data);
            window.location = "/login";
        });

        promise.catch(error => {
            if (error.response.status === 409){
            alert("Esse usuário já existe!");
        }
            console.log(error.response);
        });
    }
    return(
        <Container>
        
        <p>Eletric Driven</p>
            <form onSubmit={registerUser}>
                <input 
                    type="text" 
                    placeholder="Nome" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}  
                    onChange={e => setEmail(e.target.value)}
                    required
                />
		        <input 
                    type="password" 
                    placeholder="Senha" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <input 
                    type="password" 
                    placeholder="Confirme a senha" 
                    value={passwordConfirm} 
                    onChange={e => setPasswordConfirm(e.target.value)}
                    required
                />
                <input 
                    type="tel" 
                    placeholder="Telefone dd-tel" 
                    value={phone} 
                    onChange={e => setPhone(e.target.value)}
                    pattern="[0-9]{11}"
                    required
                />
		        <button type="submit">Cadastrar</button>
            </form>
            <Link className="link" to="/">Já tem uma conta? Faça login!</Link>
            <Link className="link" to="/">Voltar para página principal</Link>
        </Container>
    )
}