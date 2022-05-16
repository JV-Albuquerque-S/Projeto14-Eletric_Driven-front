import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 50px;
    background-color: #006494;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.h1`
    font-size: 35px;
    padding-left: 10px;
    color: #FED766;
`

export const Icons = styled.div`
    font-size: 30px;
    padding-right: 10px;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color:  #FED766;

    p {
        font-size: 20px;
        color: #FFFFFF;
    }

    b {
        font-size: 35px;
    }

    .right-coner {
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    .greeting{
        font-size: 25px;
    }

    .dropdown {
        display: inline-block;
        height: 50px;
        display: flex;
        align-items: center;
        justify-items: space-around;
    }

    .dropdown ion-icon {
        margin-left: 20px;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        right: 0px;
        top: 50px;
        background-color: #006494;
        min-width: 160px;
        z-index: 1;
    }

    .dropdown-content .link {
        color: #FFFFFF;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .dropdown-content .link:hover {color: #FED766;}

    .dropdown:hover .dropdown-content {display: block;}

    

`