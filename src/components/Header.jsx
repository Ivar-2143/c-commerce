import styled from "styled-components";
import logo_bg from '../assets/logo.png';
import logo_sm from '../assets/logo-sm.png';
import cartIcon from '../assets/icons/shopping-cart.png';
import menuIcon from '../assets/icons/burger-menu-icon.png';
import * as variable from './variables';
import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext , useEffect} from "react";
import { UserInfo } from "../App";

function Header() {
    const location = useLocation();
    const params = useLocation();
    const {user,updateUser,cart,updateCart} = useContext(UserInfo);
    
    
    return (
        <div>
            <Wrapper>
                <StyledLink to={"/"}>
                    <LogoBG src={logo_bg} />
                    <LogoSM src={logo_sm} />
                </StyledLink>
                <StyledLink to={"/"}>
                    <h1>{(params.pathname == "/cart")? "Cart" : "Shop"}</h1>
                </StyledLink>
                <RightContainer>
                    <CartContainer>
                       <Link to="/cart"><img src={cartIcon} alt="cart" /></Link> 
                       <span>{cart.length}</span>
                    </CartContainer>
                    <Link to="/login"><button>{(user)? "Hi," + user.firstName: "Sign In" }</button></Link>
                    <BurgerMenu src={menuIcon} />
                </RightContainer>
            </Wrapper>
        </div>
  )
}

const StyledLink = styled(NavLink)`
    
    text-decoration: none;
    h1{
        position: absolute;
        left: 50%;
        top: 55%;
        transform: translate(-50%,-50%);
        font-family: 'Capriola';
        text-align: center;
        cursor: pointer;
        font-size: ${variable.font_big};
        color: ${(props)=> props.theme.main.secondary};
    }
`;

const Wrapper = styled.div`
    width: 88%;
    height: 90px;
    margin: 0 6%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`;

const LogoBG = styled.img`
    height: 62px;
    width: 188px;
    cursor: pointer;
    @media (width < ${variable.smallScreen}) {
        display: none;
    }
`;

const LogoSM = styled.img` 
    cursor: pointer;
     width: 60px;
     @media (width > calc(${variable.smallScreen} - 1px)) {
         display: none;
     }
`;
const CartContainer = styled.div`
    position: relative;
    width: 25px;
    height: 25px;
    cursor: pointer;
    img{
        width: 25px;
        position: relative;
    }
    span{
        position: absolute;
        top: -10px;
        left: 60%;
        height: 25px;
        width: 25px;
        border-radius: ${variable.radius.round_edge};
        background-color: ${(props) => props.theme.main.accent};
        text-align: center;
        vertical-align: middle;
        border: 2px solid ${(props) => props.theme.main.primary};
    }
`;

const RightContainer = styled.div`
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    button{
        cursor: pointer; 
        width: 120px; 
        height: 40px;
        border-radius: 25px;
        font-size: ${variable.font.size_m};
        font-weight: 600;
        margin-left: 20px;
        background-color: ${(props) => props.theme.main.accent};
        border: none;
        &:hover{
            border: 2px solid ${(props) => props.theme.main.secondary};
            
        }
    }
    @media (width < 700px) {
        button,${CartContainer}{
            display: none;
        }
    }
`;

const BurgerMenu = styled.img`
    width: 55px;
    cursor: pointer;
    position: relative;
    @media (min-width: ${variable.smallScreen}){
        display: none;
    }
`;


   


export default Header;