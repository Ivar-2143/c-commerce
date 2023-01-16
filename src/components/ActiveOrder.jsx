import React from 'react'
import * as variable from './variables';
import styled from 'styled-components';
import OrderDetails from './OrderDetails';
import { Wrapper, Status } from "@googlemaps/react-wrapper";


function ActiveOrder() {
    

  return (
    <div>
        <OrderDetails />
        {/* <div>
            <Wrapper apiKey='AIzaSyBFLumWPmpjrCPsDuk9T-_i4u_pLq6mTTw' render={()=> {
                return <h1>{Status}</h1>
            }}/>
        </div> */}
    </div>
  )
}

export default ActiveOrder