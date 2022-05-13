import { Header, Title, Icons } from "./styles";

export default function TopBar(){
    return(
        <Header>
            <Title>EletricDriven</Title>
            <Icons>
                <ion-icon name="cart-outline"></ion-icon>
                <ion-icon name="person-circle-outline"></ion-icon>
            </Icons>
        </Header>
    )
}