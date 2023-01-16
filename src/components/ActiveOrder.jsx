import React from 'react'
import * as variable from './variables';
import styled from 'styled-components';
import OrderDetails from './OrderDetails';
import { Wrapper, Status } from "@googlemaps/react-wrapper";


function ActiveOrder() {
    

  return (
    <ContentWrapper>
        <ControlWrapper>
            <OrderDetails />
            <Buttons>
                <BtnCancel>Cancel Order</BtnCancel>
                <BtnAccept>Accept Order</BtnAccept>
                <BtnDeliver>Deliver Items</BtnDeliver>
                <BtnCompleted>Order Complete</BtnCompleted>
            </Buttons>
        </ControlWrapper>
        <MapWrapper>
            <iframe
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed">
            </iframe>
        </MapWrapper>
        {/* <div>   
            <Wrapper apiKey='' render={()=> {
                return <h1>{Status}</h1>
            }}/>
        </div> */}
    </ContentWrapper>
  )
}

const ControlWrapper = styled.div`
`;
const MapWrapper = styled.div`
    width: 50%;
    height: 50%;
    right: 0;
    top: 0;
    position: absolute;
    iframe{
        width: 100%;
        height: 100%;
    }

`
const ContentWrapper = styled.div`
`;

const Buttons = styled.div`
    
`
const BtnCancel = styled.button`
    
`;

const BtnAccept = styled.button`
    
`;

const BtnDeliver = styled.button`
    
`;
const BtnCompleted = styled.button`
    
`

export default ActiveOrder