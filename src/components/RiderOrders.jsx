import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import IncomingOrders from './IncomingOrders';
import { UserInfo } from '../App';

function RiderOrders() {
    const navigate = useNavigate()
    const location = useLocation();
    const params = useParams(); 
    const {user, updateUser, cart, updateCart} = useContext(UserInfo);

    useEffect(()=>{
        
    }, [[params.type]])

  return (
    <div>{(params.type == 'active')? "Active Orders" : (params.type == 'completed')? "Completed Orders" : <IncomingOrders />}</div>
  )
}

export default RiderOrders