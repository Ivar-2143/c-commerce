import React from 'react'
import styled from 'styled-components'
import OrderPreview from './OrderPreview';
import * as variable from './variables';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

function IncomingOrders() {
  const navigate = useNavigate();

  const handleNavigate = (id) =>{
    navigate(`active/${id}`)
  }
  const [availableUsers, setAvailableUsers] = useState([])

  const initializeOrders = async () =>
  {
    const serverFullInfo = await fetch(`http://localhost:9000/users`)
    .then(response => response.json())
    .catch(err => alert(`Error: ${err.message}`))
    console.log("Server: ", serverFullInfo)
    const filter = serverFullInfo.filter(user => user.type === "customer" && user.orders.length >= 1)
    console.log("Filter: ", filter)
    setAvailableUsers(filter)
  }

  useEffect(()=>
  {
    initializeOrders();
  },[])
 
  

  return (
    <ContentWrapper>
        <OrderList>
          {availableUsers.map(user => {
            return(
              <OrderPreview key={user.id} userDetails={user} navigate={handleNavigate}/>
            )
          })}
            
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