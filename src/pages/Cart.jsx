import { currentLogInUser } from './LogIn'
import { UserInfo } from '../App';
import { useContext } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import * as variable from '../components/variables';
import removeIc from '../assets/icons/icon-remove-96.png';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {user,updateUser, cart, updateCart} = useContext(UserInfo);
  console.log(cart);
  console.log(user);
  const navigate = useNavigate();

  const handleCheckout = () => {
    // let res = confirm("Are you sure you want to checkout?")
    
  }

  const cartDetails = async () =>
  {
    const getCartDetails = await fetch(`http://localhost:9000/users/${currentLogInUser[0].id}`)
    .then(response => response.json())
    .then(jsonfile => jsonfile.cart)
    return getCartDetails
  }

  let totalPrice = 0; 

  const calculateTotal = () => {
    cart.map(item => totalPrice += item.productPrice * item.itemQuantity);
  }
  calculateTotal();


  return (
    <CartWrapper>  
      <Header />
      <SubHeader>
        <BackBtn onClick={
          ()=> navigate(-1)
        }>Continue Shopping</BackBtn>
        <p> <b>TOTAL PRICE: ₱{totalPrice} </b></p>
        <CheckoutBtn onClick={()=> (window.confirm("Are you sure you want to checkout?")? navigate("/checkout") : console.log("Cancelled Checkout"))}> Checkout </CheckoutBtn>
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
                <button>
                  -
                </button>
                <span>
                  {cartItem.itemQuantity}
                </span>
                <button> 
                  +
                </button>
              </SQuantity>
              <STotal>
                Total: ₱{cartItem.productPrice * cartItem.itemQuantity}   
              </STotal>
              <RemoveBtn>
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