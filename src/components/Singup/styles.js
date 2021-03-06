import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-size:50px;
        color: #126BA5;
        margin-bottom: 30px;
        color: #FED766;
        /* font-family: 'Press Start 2P', cursive; */
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
        /* font-family: 'Raleway', sans-serif; */
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
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 10px;
        text-align: center;
        text-decoration-line: none;
        color: #FFFFFF;;
        font-family: 'Raleway', sans-serif;
    }

`