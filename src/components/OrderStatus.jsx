import styled from "styled-components";
import * as variable from "./variables";

function OrderStatus() {
  return (
    <StatusWrapper>
        <Title>
            <h1>OrderStatus</h1>
        </Title>
        <Content>
            <Images>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Images>
            <Trailers>
                <CircleStatus><ActiveStatus /></CircleStatus>
                <SmallTrails />
                <SmallTrails />
                <SmallTrails />
                <CircleStatus></CircleStatus>
                <SmallTrails />
                <SmallTrails />
                <SmallTrails />
                <CircleStatus></CircleStatus>
                <SmallTrails />
                <SmallTrails />
                <SmallTrails />
                <CircleStatus></CircleStatus>
            </Trailers>
            <Messages>
                <ul>
                    <li>
                        <h2>Waiting for a rider.</h2>
                        <span>Finding nearby riders for your order</span>
                    </li>
                    <li>
                        <h2>Order accepted!</h2>
                        <span>Rider is now picking up the item/s</span>
                    </li>
                    <li>
                        <h2>Your rider is on the way</h2>
                        <span>Item/s are packed and ready to go.</span>
                    </li>
                    <li>
                        <h2>Delivered!</h2>
                        <span>Fresh crops, poultry, and meat on your doorstep.</span>
                    </li>
                </ul>
            </Messages>
        </Content>
    </StatusWrapper>
  )
}

const StatusWrapper = styled.div`
    width: 60%;
    height: 100%;
    position: relative;
    margin-top: 40px;
`;

const Title = styled.div`
    position: relative;
    width: 50%;
    left: 10%;
    h1{
        width: fit-content;
        border-bottom: 2px solid ${(props) => props.theme.main.secondary};
    }
`;
const Content = styled.div`
    position: relative;
    margin-top: 40px;
    width: 80%;
    /* margin-left: 12%; */
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    height: 600px;
`;


const Images = styled.div`
    position: relative;
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    div{
        position: relative;
        width: 100%;
        height: 100px;
        background-color: black;
    }
`
const Trailers = styled.div`
    position: relative;
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0;
    div{
        border-radius: ${variable.radius.round_edge};
        outline: none;
    }
`;
const CircleStatus = styled.div`
    background-color: rgba(0,0,0, 0.5);
    width: 50px;
    height: 50px;
    position: relative;
    
`;

const ActiveStatus = styled.div`
    width: 40px;
    height: 40px;
    background-color: ${(props) => props.theme.main.accentGreen};
    border-radius: ${variable.radius.round_edge};
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
`
const SmallTrails = styled.div`
    width: 10px;
    height: 10px;
    background-color: rgba(0,0,0, 0.5);
`;

const Messages = styled.div`
    position: relative;
    width: 60%;
    height: 100%;
    ul{
        display: flex;
        flex-direction: column;
        height: 92%;
        width: 100%;
        justify-content: space-between;
        margin-top: 30px;
        /* gap: 100px; */
        li{
            list-style: none;
            
        }
    }

`

export default OrderStatus