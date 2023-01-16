import { currentLogInUser } from './LogIn'
import { UserInfo } from '../App';
import { useContext, useEffect } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import * as variable from '../components/variables';
import removeIc from '../assets/icons/icon-remove-96.png';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {user, cart, orders, updateCart, updateOrders} = useContext(UserInfo);
  // console.log(cart);
  // console.log(user);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    // let res = confirm("Are you sure you want to checkout?")
    //(window.confirm("Are you sure you want to checkout?")? navigate("/checkout") : console.log("Cancelled Checkout")
    if (window.confirm("Are you sure you want to checkout?") && cart.length >= 1)
    {
      const responseStatus = await finalizeCartDetails()
      responseStatus ? navigate("/checkout") : alert("Something went wrong.")
    }
    else if ( cart.length < 1)
    {
      alert("You can't go to checkout without planning to purchase any item!")
    }
    else
    {
      alert("Checkout cancelled.")
    }
    
  }

  const updateDetails = async () =>
  {
    const serverUserDetails = await fetch(`http://localhost:9000/users/${user.id}`)
    .then(response => response.json())
    updateCart(serverUserDetails.cart)
    updateOrders(serverUserDetails.orders)
  }

  const finalizeCartDetails = async () =>
  {
    const randomOrderNumber = (Math.floor(Math.random() * 10000) + 1).toString()
    const newUserDetails = {...user, cart:[], orders:[...orders].concat({...cart, orderStatus:"Pending", orderNumber: randomOrderNumber})}
    const updateResponse = await fetch(`http://localhost:9000/users/${user.id}`,
    {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUserDetails)
    })
    .then(response =>
      {
        return response.ok
      })
    .catch(err => alert(`Error with server updation: ${err.message}`))
    return updateResponse
  }

  useEffect(() =>
  {
    updateDetails()
  },[])

  let totalPrice = 0; 

  const calculateTotal = () => {
    cart.map(item => totalPrice += item.productPrice * item.itemQuantity);
  }
  calculateTotal();

  const modifyQuantity = async (event, productName, elementID) =>
  {
    //console.log("Initial cart", cart)
    let selectedItem = cart.filter(item => item.productName === productName)
    let newCart = cart
    if (event.target.innerText === "+")
    {
      newCart = cart.map(item => {
        if (item.productName === productName)
        {
          item.itemQuantity += 1
        }
        return item
      })
      updateCart(newCart)
      console.log(newCart)
    } else if (event.target.innerText === "-" && selectedItem[0].itemQuantity === 1)
    {
      newCart = newCart.filter(item => item.id != elementID)
      updateCart(newCart)
    }
    else
    {
      newCart = cart.map(item => {
        if (item.productName === productName)
        {
          item.itemQuantity -= 1
        }
        return item
      })
      updateCart(newCart)
    }

    const updateResponse = await fetch(`http://localhost:9000/users/${user.id}`,{
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...user, cart:newCart})
    }).catch(err => alert(`Error: ${err}`))
  }

  const deleteItem = async (productID) =>
  {

    let newCart = cart.filter(item => item.id != productID)
    console.log("test")
    updateCart(newCart)
    console.log(cart)
    const updateResponse = await fetch(`http://localhost:9000/users/${user.id}`,{
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...user, cart:newCart})
    }).catch(err => alert(`Error: ${err}`))
  }


  return (
    <CartWrapper>  
      <Header />
      <SubHeader>
        <BackBtn onClick={
          ()=> navigate(-1)
        }>Continue Shopping</BackBtn>
        <p> <b>TOTAL PRICE: ₱{totalPrice} </b></p>
        <CheckoutBtn onClick={handleCheckout}> Checkout </CheckoutBtn>
      </SubHeader>
        
      <CartList>
        {cart.map(cartItem =>
          <>
            <Line />
            <li key={cartItem.id}>
              <SItem>
                <SImage src={require(`../assets/product-images/${cartItem.image}`)} alt="" />
                <NameNPrice>
                  <SName>
                    {cartItem.productName}
                  </SName>
                  <SPrice>
                    ₱{cartItem.productPrice}
                  </SPrice>
                </NameNPrice>
              </SItem>
              <SQuantity>
                <button onClick={event => modifyQuantity(event, cartItem.productName, cartItem.id)}>
                  -
                </button>
                <span>
                  {cartItem.itemQuantity}
                </span>
                <button onClick={event => modifyQuantity(event, cartItem.productName, cartItem.id)}> 
                  +
                </button>
              </SQuantity>
              <STotal>
                Total: ₱{cartItem.productPrice * cartItem.itemQuantity}   
              </STotal>
              <RemoveBtn onClick={() => deleteItem(cartItem.id)}>
                <RemoveIcon src={removeIc} />
              </RemoveBtn>
            </li>
          </>)
        }
      </CartList>
    </CartWrapper>
  )
}


const SQuantity = styled.div`
    background-color: ${(props) => props.theme.main.secondary};
    border-radius: 10px;
    overflow: hidden;
    color: ${(props) => props.theme.main.primary};
    button{
      background-color: ${(props) => props.theme.main.secondary};
      color: ${(props) => props.theme.main.primary};
      width: 30px;
      height: 50px;
      font-size: ${variable.font.size_xl};
      margin: 0 10px;
      cursor: pointer;
      border: none;
      outline: none;
    }
    span{
      text-align: center;
      border-left: 2px solid rgba(255, 255, 255, 0.2);
      border-right: 2px solid rgba(255,255,255,0.2);
      padding: 0 15px;
      font-size: ${variable.font.size_xl};
    }

`;
const CartWrapper = styled.div`
  position: relative;
  width: 100%;
  /* padding: 20px; */
`;
const SubHeader = styled.div`
  position: relative;
  width: 60%;
  display: flex;
  left: 50%;
  transform: translate(-50%, 0);
  justify-content: space-between;
  margin-top: 30px;
  align-items: center;
  font-size: ${variable.font.size_l};
  button{
    height: 40px;
    width: 200px;
    border: none;
    border-radius: ${variable.radius.smooth_edge};
    cursor: pointer;
  }
`;

const BackBtn = styled.button`
    background-color: ${(props) => props.theme.main.secondary};
    color: ${(props) => props.theme.main.primary};  
`;

const CheckoutBtn = styled.button`
    background-color: ${(props) => props.theme.main.accent};
    color: ${(props) => props.theme.main.secondary};
`;

const CartList = styled.ul`
  /* background-color: blue; */
  margin-top: 25px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  li{
    list-style: none;
    width: 60%;
    height: 170px;
    position: relative;
    display: flex;
    border-radius: ${variable.radius.smooth_edge};
    border-radius: 20px;
    /* background-color: ${(props) => props.theme.main.secondary}; */
    /* display: block; */
    justify-content: space-between; 
    align-items: center;

    padding: 0 10px;
    
  }
`;

const Line = styled.div`
    width: 60%;
    position: relative;
    /* left: 50%; */
    height: 2px;
    background-color: rgba(0,0,0,0.4);
    border-radius: 4px;
    /* transform: translate(-50%, 0); */

`;

const SImage = styled.img`
  
  position: relative;
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 15px;
  /* border-radius: ${variable.radius.smooth_edge}; */
  
`;
const NameNPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(100% - 200px);
  /* background-color: green; */
  margin-left: 10px;
`;

const SName = styled.span`
  margin-top: 10px;
  font-size: ${variable.font.size_xl};
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
  font-weight: 500;
  color: ${(props) => props.theme.main.accent};
`;

const SPrice = styled.span`
  font-size: ${variable.font.size_l};
  color: ${(props) => props.theme.main.secondary}
`;  

const SItem = styled.div`
  display: flex;
  /* background-color: green; */
  padding: 0;
  width: 500px;
`;

const STotal = styled.div`
  color: ${(props)=> props.theme.main.secondary};
  font-size: ${variable.font.size_l};
  font-weight: 500;
`;

const RemoveBtn = styled.button`
  
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 30px;
`;

const RemoveIcon = styled.img`
  
  width: 50px;
  height: 50px;
  object-fit: cover;
  `;

export default Cart