import React from 'react'
import styled from 'styled-components'
import OrderPreview from './OrderPreview';
import * as variable from './variables';
import { useNavigate } from 'react-router';

function IncomingOrders() {
  const navigate = useNavigate();

  const handleNavigate = () =>{
    navigate('/riders/active')
  }

  return (
    <ContentWrapper>
        <OrderList>
            <OrderPreview key={1} navigate={handleNavigate}/>
            <OrderPreview key={2} navigate={handleNavigate}/>
            <OrderPreview key={3} navigate={handleNavigate}/>
            <OrderPreview key={4} navigate={handleNavigate}/>
            <OrderPreview key={5} navigate={handleNavigate}/>
            <OrderPreview key={6} navigate={handleNavigate}/>
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