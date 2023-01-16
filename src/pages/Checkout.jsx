import React from 'react'
import * as variable from '../components/variables';
import Header from '../components/Header';
import styled from 'styled-components';
import OrderDetails from '../components/OrderDetails';
import OrderStatus from '../components/OrderStatus';
import { useEffect, useContext } from 'react';
import { UserInfo } from '../App';



function Checkout() {

  const {user, cart, updateCart, orders, updateOrders} = useContext(UserInfo);

  const updateDetails = async () =>
  {
    updateOrders(cart)
    console.log("Cart Local Prior to Deletion: ", cart)
    updateCart([])
  }

  useEffect(() =>
  {
    updateDetails()
  },[])


  return (
    <div>
        <Header />
        <ContentWrapper>
            <OrderStatus />
            <Line />
            <OrderDetails orders={orders}/>
        </ContentWrapper>
    </div>
  )
}

const ContentWrapper = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - 90px);
    /* background-color: green; */
    display: flex;
    padding: 0;
    margin: 0;
`;
const Line = styled.div`
    width: 2px;
    height: 70%;
    top: 10%;
    position: relative;
    background-color: ${(props) => props.theme.main.secondary};
`;



export default Checkout