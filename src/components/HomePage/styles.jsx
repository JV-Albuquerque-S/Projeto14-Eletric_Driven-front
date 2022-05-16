import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 15px;

    div {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 15px;
    }

    img {
        width: 80%;
        border-radius: 20px;
    }

    p {
        color: white;
        font-size: 20px;
        text-align: center;
    }
`