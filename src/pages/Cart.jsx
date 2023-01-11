import React from 'react'
import { currentLogInUser } from './LogIn'

const Cart = () => {

  const cartDetails = async () =>
  {
    const getCartDetails = await fetch(`http://localhost:9000/users/${currentLogInUser[0].id}`)
    .then(response => response.json())
    .then(jsonfile => jsonfile.cart)
    return getCartDetails
  }
  let totalPrice = 0
  return (
    <>  
      <ul>
        {cartDetails.map(cartItem => 
        <li>
          Item Name: {cartItem.productName}
          <br />
          Item Quantity: {cartItem.itemQuantity}
          <br />
          Item Price: {cartItem.productPrice}
          <br />
          Total Price For {cartItem.productName}: {cartItem.productName * cartItem.itemQuantity}
          {totalPrice += cartItem.productName * cartItem.itemQuantity}
        </li>)}
      </ul>
      <p> Total Price of all items: {totalPrice}</p>
      <button> Proceed to payment </button>
    </>
  )
}

export default Cart