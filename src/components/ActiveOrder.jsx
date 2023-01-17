import React from 'react'
import * as variable from './variables';
import styled from 'styled-components';
import OrderDetails from './OrderDetails';
import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { UserInfo } from '../App';
import CheckedOut from './CheckedOut';


function ActiveOrder() {
    const [statusIndex, setStatusIndex] = useState(0);
    const navigate = useNavigate();
//     const params = useParams();
//     const {user, cart, updateCart, orders, updateOrders} = useContext(UserInfo);

//     const updateDetails = async () =>
//     {
//       const getLatestOrder = await fetch(`http://localhost:9000/users/${user.id}`)
//       .then(response => response.json())
//       .then(jsonfile => jsonfile.orders)
//       updateOrders(getLatestOrder[getLatestOrder.length - 1])
//       console.log("Cart Local Prior to Deletion: ", cart)
//       updateCart([])
//     }

//   useEffect(() =>
//   {
//     updateDetails()
//   },[params.orderId])

    
  return (
    <ContentWrapper>
        <ControlWrapper>
            <CheckedOut />
            <Buttons>
                
                <BtnCancel 
                    style={{
                        opacity: (statusIndex > 0)? '0' : '1',
                        pointerEvents: (statusIndex >0)? 'none':'unset'
                    }} 
                    onClick={()=> navigate(-1)}
                >
                    Cancel Order
                </BtnCancel>
                <BtnAccept 
                    className={
                        (statusIndex == 1)? 'inactive' : 'active'
                    }
                    style={{
                        opacity: (statusIndex > 2)? '0' : '1',
                        left: (statusIndex == 1)? '0' : '100%',
                        transform: (statusIndex == 1)? 'translateY(0)' : 'translateX(-100%)',
                        display: (statusIndex > 1)? 'none' : 'block'
                    }}
                    onClick={
                        ()=> setStatusIndex(1)
                    }>
                        Accept Order
                </BtnAccept>
                <BtnDeliver
                    className={
                        (statusIndex > 1)? 'inactive' : 'active'
                    }
                    style={{
                        opacity: (statusIndex > 0)? '1' : '0',
                        display: (statusIndex > 0)? 'block' : 'none',
                        left: (statusIndex > 1)? '0' : '100%',
                        transform: (statusIndex > 1)? 'translateY(0)' : 'translateX(-100%)'
                    }}
                    onClick={
                        ()=> setStatusIndex(2)
                    }>
                        Deliver Items
                </BtnDeliver>
                <BtnCompleted
                    className={
                        (statusIndex > 2)? 'inactive' : 'active'
                    }
                    style={{
                        opacity: (statusIndex < 2)? '0' : '1',
                        display: (statusIndex > 1)? 'block' : 'none',
                    }}
                    onClick={
                        ()=> setStatusIndex(3)
                    }>
                        Order Complete
                </BtnCompleted>
            </Buttons>
            <Reset onClick={()=> setStatusIndex(0)}> FOR TESTING: reset </Reset>
        </ControlWrapper>
        <MapWrapper>
            <iframe
                loading="lazy"
                zoom="10"
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
    /* background-color: green; */
    position: relative;
    width: 100%;
    margin-top: 5%;
`;
const MapWrapper = styled.div`
    width: 50%;
    height: 90%;
    top: 0;
    left: 45%;
    position: absolute;
    iframe{
        width: 100%;
        height: 100%;
        border-radius: ${variable.radius.smoother_edge};
        outline: none;
        border: 2px solid black;
        
    }

`
const ContentWrapper = styled.div`
    /* background-color: green; */
    position: relative;
    width: 100%;
`;



const Buttons = styled.div`
    width: 29%;
    height: 100px;
    position: relative;
    margin-left: 60px;
    transition: 400ms ease;
    button{
        top: 30%;
        outline: none;
        width: 180px;
        height: 50px;
        font-size: ${variable.font.size_l};
        position: absolute;
        border: none;
        transition: 400ms ease;
        cursor: pointer;
        border-radius: 10px;
    }
    .inactive{
        background-color: #cccccc;
        color: #666666;
        pointer-events: none;
    }
`
const BtnCancel = styled.button`
    left: 0;
    opacity: 1;
    background-color: ${(props)=> props.theme.main.accentRed};
    color: ${(props) => props.theme.main.primary};
`;

const BtnAccept = styled.button`
    left: 100%;
    transform: translateX(-100%);
    background-color: ${(props) => props.theme.main.accent};
    color: ${(props) => props.theme.main.secondary};
`;

const BtnDeliver = styled.button`
    left: 100%;
    transform: translateX(-100%);
    background-color: ${(props) => props.theme.main.accent};

    
`;
const BtnCompleted = styled.button`
    left: 100%;
    transform: translateX(-100%);
    background-color: ${(props) => props.theme.main.accent};
`

const Reset = styled.button`
`



export default ActiveOrder