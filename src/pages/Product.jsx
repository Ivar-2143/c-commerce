
import { useContext } from "react";
import styled from "styled-components";
// import { UserContext } from "../assets/context/UserContext";
import { UserInfo } from "../App";
import * as variable from '../components/variables';
import { currentLogInUser } from "./LogIn";

function Product({product}) {
    console.log(product);
    const {user,updateUser,cart,updateCart} = useContext(UserInfo);
    


    const handleAddToCart = async () =>
    {
        let newCart;
        let alreadyExistingItem = false
        let canPush = true
        const currentUser = await fetch(`http://localhost:9000/users/${currentLogInUser[0].id}`)
        .then(response => response.json())
        .catch(err => {
            canPush = false
            alert(`Error: ${err.message}`)
        })

        if (canPush === false) { return }

        currentUser.cart.forEach(element => {
            if (element.productName === product.name)
            {
                alreadyExistingItem = true
            }
        })

        if (alreadyExistingItem)
        {
            const cartItem = currentUser.cart.filter(element => element.productName === product.name)[0]
            const cartItemIndex = currentUser.cart[currentUser.cart.indexOf(cartItem)]
            cartItem.itemQuantity += 1
            currentUser.cart[cartItemIndex] = {...cartItem}
            newCart = currentUser.cart
            updateCart(newCart);
            console.log(cart);
        }
        else
        {
            newCart = currentUser.cart.concat({productName: product.name, productPrice: product.price, itemQuantity: 1, id: product.id, image: product.image})
            updateCart(newCart);
            console.log(cart);
        }

        const response = await fetch(`http://localhost:9000/users/${currentUser.id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...currentUser, cart:newCart})
        }).catch(err => alert(`Error: ${err.message}`))

        if (response.status === 200)
        {
            if (alreadyExistingItem)
            {
                alert("Item already exists in cart. Item quantity increased.")
                return
            }
            alert("Item successfully added to cart.")
        }
        else
        {
            alert("Something went wrong adding the item to your cart.")
        }
         
    }   

  return (
    <>
        <ImageContainer>
        <img src={require(`../assets/product-images/${product.image}`)} alt="" />
        <GlassMask />
        </ImageContainer>
        <ProductDetails>
            <NamePriceWrap>
                <Name>
                    {product.name}
                </Name>
                <Price>
                    ₱ {product.price}{product.unit}
                </Price>
            </NamePriceWrap>
        </ProductDetails>
        <FormContainer> 
            {/* Suggestion:
                Move order notes to cart finalization page
                - James
            */}
            <textarea type="text" placeholder='Order Notes...' wrap='hard' rows='1' />
        </FormContainer>
        <AddToCartBtn onClick={handleAddToCart}> Add to Cart </AddToCartBtn>
            
    </>
  )
}


const Name = styled.span`
    margin-top: 20px;
    font-size: ${variable.font.size_l};
    display: block;
`;

const Price = styled.span`
    display: block;
    font-size: ${variable.font.size_m};
    margin-left: 10px;
    font-weight: 500;
`;
const NamePriceWrap = styled.div`
    position: relative;
    width: 80%;
    left: 50%; 
    transform: translate(-50%,0);

    border-bottom: 2px solid ${(props) => props.theme.main.secondary};
`;

const GlassMask = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.2;
    position: absolute;
    left: 50%;
    margin: 0;
    padding: 0;
    top: 50%;
    transform: translate(-50%,-50%);
`;

const ImageContainer = styled.div`
    position: relative;
    border-bottom: 2px solid ${(props)=> props.theme.main.secondary};
    z-index: 3;
    width: 100%;
    height: 50%;
    overflow: hidden;
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    @media ${variable.device.mobileL}{
        width: 100%;
        height: 48%;
        img{
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
        
    }
`;

const FormContainer = styled.div`
    height: calc(100% - (68% + 40px));
    position: relative;
    width: 100%;
    textarea{
        position: relative;
        bottom: 15%;
        left: 50%;
        transform: translate(-50%, -50%);
        resize:none;
        width: 70%;
        height: 1.5rem;
        font-size: ${variable.font_standard};
        border: none;
        top: 90%;
        border-bottom: 2px solid ${(props) => props.theme.main.secondary};
    }
`;

const ProductDetails = styled.div`
    height: 18%;
    width: 100%;
    position: relative;
`;

const AddToCartBtn = styled.button`
    margin: 4%   0;
    height: 40px;
    width: 80%;
    cursor: pointer;
    border-radius: ${variable.radius.smooth_edge};
    border: 2px solid ${(props) => props.theme.main.secondary};
    background-color: ${(props) => props.theme.main.tintedBlue};
`;


export default Product;