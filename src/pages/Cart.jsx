import { currentLogInUser } from './LogIn'
import { UserInfo } from '../App';
import { useContext } from 'react';

const Cart = () => {
  const {user,updateUser, cart, updateCart} = useContext(UserInfo);

  const cartDetails = async () =>
  {
    const getCartDetails = await fetch(`http://localhost:9000/users/${currentLogInUser[0].id}`)
    .then(response => response.json())
    .then(jsonfile => jsonfile.cart)
    return getCartDetails
  }

  let totalPrice = 0; 

  const calculateTotal = (price, qty) => {
    totalPrice += price * qty
  }

  return (
    <>  
      <ul>
        {cart.map(cartItem => 
        <li key={cartItem.id}>
          Item Name: {cartItem.productName}
          <br />
          Item Quantity: {cartItem.itemQuantity}
          <br />
          Item Price: {cartItem.productPrice}
          <br />
          Total Price For {cartItem.productName}: {cartItem.productPrice * cartItem.itemQuantity} 
          {calculateTotal(cartItem.productPrice,cartItem.itemQuantity)}
        </li>)}
      </ul>
      <p> Total Price of all items: {totalPrice}</p>
      <button> Proceed to payment </button>
    </>
  )
}

export default Cart