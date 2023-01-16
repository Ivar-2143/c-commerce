import React from 'react'
import styled from 'styled-components'
import OrderPreview from './OrderPreview';
import * as variable from './variables';

function IncomingOrders() {

  

  return (
    <ContentWrapper>
        <OrderList>
            <OrderPreview key={1}/>
            <OrderPreview key={2}/>
            <OrderPreview key={3}/>
            <OrderPreview key={4}/>
            <OrderPreview key={5}/>
            <OrderPreview key={6}/>
        </OrderList>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
   width: 70%;
   position: relative;
   left: 50%;
   top: 10%;
   transform: translate(-50%, 0);
` ;
const OrderList = styled.ul`
    
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 5%;
`;


export default IncomingOrders