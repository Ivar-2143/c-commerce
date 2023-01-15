import React from 'react'
import * as variable from '../components/variables';
import Header from '../components/Header';
import styled from 'styled-components';
import OrderDetails from '../components/OrderDetails';
import OrderStatus from '../components/OrderStatus';

function Checkout() {
  return (
    <div>
        <Header />
        <ContentWrapper>
            <OrderStatus />
            <Line />
            <OrderDetails />
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