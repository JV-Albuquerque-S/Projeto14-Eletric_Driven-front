import axios from "axios";
import { useEffect, useState } from "react";

import TopBar from "../TopBar";

export default function CartPage(){
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const request = axios.get("http://localhost:5000/userCart")
        request.then(response => {
            console.log(response.data);
            setCart(response.data);
        })
    }, []);

    return(
        <>
            <TopBar />
            <Container>
                <p>Carrinho</p>
                {cart.map(item => {
                    return (
                        <div>
                            <img src={item.img} alt="imagem do produto" />
                            <p>{item.name}</p>
                            <p>R${item.price},00</p>
                        </div>
                    )
                })}
            </Container>
        </>
    )
}