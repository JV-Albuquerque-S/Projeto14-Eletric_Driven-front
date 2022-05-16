import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px;

    h1 {
        font-size:50px;
        color: #126BA5;
        margin-bottom: 30px;
        color: #FED766;   
    }
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 15px;
    }

    p {
        color: white;
        font-size: 25px;
        text-align: center;
    }

    img {
        width: 80%;
        border-radius: 20px;
    }
`