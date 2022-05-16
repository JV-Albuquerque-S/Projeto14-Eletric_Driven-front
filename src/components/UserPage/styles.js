import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
	display: flex;
    padding-left: 10px;
    margin-top: 20px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    
    li {
        margin-bottom: 15px;
        font-size: 35px;
        color: #FFFFFF;
    }

    p {
        font-size:50px;
        color: #126BA5;
        margin-bottom: 30px;
        color: #FED766;   
    }

    form{
        display: flex;
        flex-direction: column;
    }

    input {
        width: 303px;
        height: 45px;
        margin-top: 10px;
        padding: 0 11px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color:  #000000;
        
    }

    input:focus:invalid {
        border: 4px solid red;
    }

    button {
        width: 303px;
        height: 45px;
        margin: 10px 0 25px 0;
        background-color: #006494;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 5px;
        font-size: 21px;
        color: #FFFFFF;
        /* font-family: 'Raleway', sans-serif;  */
    }
   
    .button-disable {
        opacity: 0.7;
    }
    
    .link {
        color: #FED766;
        font-size: 40px;
        margin-top: 60px;
        text-align: center;
        text-decoration-line: none;
    }

    .links {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`