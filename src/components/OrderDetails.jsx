import styled from "styled-components";
import * as variable from './variables';

function OrderDetails({orders}) {
  console.log("Order Details: ", orders)
  return (
    <DetailsWrapper>
        <Title>
            <h1>Order Details</h1>
        </Title>
        <Content>
            <OrderTracker>
                <span><b>Order No.: </b></span>
                <span><b>Date: </b></span>
            </OrderTracker>
            <Labels>
                <h3>Product</h3>
                <MidLbl>Quantity</MidLbl>
                <Rightlbl>Price</Rightlbl>
            </Labels>
            <ItemsContainer>
                {orders.map(orderItem =>
                    {
                        return(
                        <Item key={orderItem.id}>
                            <div>
                                <span>{orderItem.productName}</span>
                                <span>{orderItem.productPrice}</span>
                            </div>
                            <MidSpan>{orderItem.itemQuantity}</MidSpan>
                            <RightSpan>₱{orderItem.itemQuantity * orderItem.productPrice}</RightSpan>
                        </Item>
                        )
                    })}
                 {/*<Item key={1}>
                    <div>
                        <span>Chicken Drumstick</span>
                        <span>₱180</span>
                    </div>
                    <MidSpan>4</MidSpan>
                    <RightSpan>₱0.00</RightSpan>
                </Item>
                <Item key={2}>
                    <div>
                        <span>Chicken Drumstick</span>
                        <span>₱180</span>
                    </div>
                    <MidSpan>4</MidSpan>
                    <RightSpan>₱0.00</RightSpan>
                </Item>
                <Item key={3}>
                    <div>
                        <span>Chicken Drumstick</span>
                        <span>₱180</span>
                    </div>
                    <MidSpan>4</MidSpan>
                    <RightSpan>₱0.00</RightSpan>
                </Item>
                <Item key={2}>
                    <div>
                        <span>Chicken Drumstick</span>
                        <span>₱180</span>
                    </div>
                    <MidSpan>4</MidSpan>
                    <RightSpan>₱0.00</RightSpan>
                </Item>
                <Item key={2}>
                    <div>
                        <span>Chicken Drumstick</span>
                        <span>₱180</span>
                    </div>
                    <MidSpan>4</MidSpan>
                    <RightSpan>₱0.00</RightSpan>
                </Item>
                <Item key={2}>
                    <div>
                        <span>Chicken Drumstick</span>
                        <span>₱180</span>
                    </div>
                    <MidSpan>4</MidSpan>
                    <RightSpan>₱0.00</RightSpan>
                </Item>
                <Item key={2}>
                    <div>
                        <span>Chicken Drumstick</span>
                        <span>₱180</span>
                    </div>
                    <MidSpan>4</MidSpan>
                    <RightSpan>₱0.00</RightSpan>
                </Item>
                <Item key={2}>
                    <div>
                        <span>Chicken Drumstick</span>
                        <span>₱180</span>
                    </div>
                    <MidSpan>4</MidSpan>
                    <RightSpan>₱0.00</RightSpan>
                </Item>
                <Item key={2}>
                    <div>
                        <span>Chicken Drumstick</span>
                        <span>₱180</span>
                    </div>
                    <MidSpan>4</MidSpan>
                    <RightSpan>₱0.00</RightSpan>
                </Item>
                <Item key={2}>
                    <div>
                        <span>Chicken Drumstick</span>
                        <span>₱180</span>
                    </div>
                    <MidSpan>4</MidSpan>
                    <RightSpan>₱0.00</RightSpan>
                </Item>
                <Item></Item>
                <Item></Item>
                {/* {order && order.map( item =>{
                    
                    })
                } */} 
                </ItemsContainer>
            
            <PriceInfo>
                <Charges>
                    <span>Subtotal</span>
                    <span>₱0.00</span>
                </Charges>
                <Charges>
                    <span>Delivery Fee</span>
                    <Free>Free</Free>
                </Charges>
                <Charges>
                    <span>Service Fee</span>
                    <Free>Free</Free>
                </Charges>
                <Total>
                    <span>TOTAL</span>
                    <span>₱0.00</span>
                </Total>
                
            </PriceInfo>
            <Note>* Please prepare exact amount of PHP 0.00</Note>
        </Content>
    </DetailsWrapper>
  )
}

const DetailsWrapper = styled.div`
    width: 40%;
    height: 100%;
    position: relative;
    margin-top: 40px;
`;

const Title = styled.div`
    position: relative;
    width: 100%;
    left: 10%;
    h1{
        width: fit-content;
        border-bottom: 2px solid ${(props) => props.theme.main.secondary};
    }
`;

const Content = styled.div`
    position: relative;
    margin-top: 10px;
    width: 80%;
    /* margin-left: 12%; */
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    flex-direction: column;
    height: 630px;
`;

const OrderTracker = styled.div`
    position: relative;
    height: 10%;
    span{
        display: block;
        font-size: ${variable.font.size_l};
    }

`;

const Labels = styled.div`
    display: grid;
    /* justify-content: space-between; */
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    width: 90%;
    height: 5%;
    margin-top: 10px;
    padding-bottom: 15px;
    /* border-bottom: 2px solid ${(props) => props.theme.main.secondary}; */
    padding-right: 5px;
`;

const ItemsContainer = styled.ul`
    height: 65%;
    width: 90%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    overflow-y: auto;
    padding-right: 5px;
    ::-webkit-scrollbar{
        width: 2px;
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track{
        background-color: rgba(0,0,0,0.1);
        border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb{
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 4px;
    }
`;

const Item = styled.li`
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* justify-content: space-between; */
    div{
        display: flex;
        flex-direction: column;
    }
    
`;

const LeftSpan = styled.span`
    text-align: start;
`;

const MidLbl = styled.h3`
    text-align: center;
`;
const MidSpan = styled.div`
    text-align: center;
`;

const Rightlbl = styled.h3`
    text-align: end;
`;
const RightSpan = styled.span`
    text-align: end;
`;

const PriceInfo = styled.div`
    height: 20%;
    width: 90%;
    padding-top: 5px;
    div{
        display: flex;
        justify-content: space-between;
    }
`;

const Charges = styled.div`
   
`;


const Free = styled.span`
    color:${(props) => props.theme.main.accentGreen};    
`;

const Total = styled.div`
    border-top: 2px solid ${(props)=> props.theme.main.secondary};
    margin-top: 10px;
    padding: 10px 0;

`;

const Note = styled.span`
    font-size: ${variable.font.size_s};
    color: rgba(0,0,0,0.4);
`;

export default OrderDetails;