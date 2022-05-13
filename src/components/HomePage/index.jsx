import axios from "axios";
import { useEffect, useState } from "react";

import TopBar from "../TopBar";

export default function HomePage(){
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const request = axios.get("http://localhost:5000/products")
        request.then(response => {
            console.log(response.data);
            setProdutos(response.data);
        })
    }, []);
    return(
        <>
            <TopBar />
            {produtos.map(produto => {
                return(
                    <div>
                        <img src={produto.img} alt="imagem do produto" />
                        <p>{produto.name}</p>
                        <p>R${produto.price}</p>
                    </div>
                )
            })}
        </>
    )
}