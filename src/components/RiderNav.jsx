import React, { useEffect } from 'react'
import styled from 'styled-components'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import * as variable from './variables';
import { useState, useContext} from 'react';
import logo from '../assets/logos/logo_honeyYellow.png';
import { UserInfo } from '../App';
import { isFocusable } from '@testing-library/user-event/dist/utils';

function RiderNav() {
    const [activeIndex, setActiveIndex] = useState(0);
    const params = useParams();
    const {user, updateUser, cart, updateCart} = useContext(UserInfo);
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(params.type == 'active'){
            setActiveIndex(1)
        }else if(params.type == 'completed'){
            setActiveIndex(2)
        }else{
            setActiveIndex(0)
        }

    },[params.type])

  return (
    <NavWrapper>
        <Logo src={logo} />
        <StyledNav>
            <SLink to={'requests'}  className={(activeIndex == 0) ? "is-active" : "is-inactive"} onClick={()=> setActiveIndex(0)}><span>Incoming Orders</span></SLink>
            <SLink to={'active'} className={(activeIndex == 1) ? "is-active"  : "is-inactive"} onClick={()=> setActiveIndex(1)}><span>Active Order </span></SLink>
            <SLink to={'completed'} className={(activeIndex == 2)? "is-active"  : "is-inactive"} onClick={()=> setActiveIndex(2)}><span>Completed Orders</span></SLink>
           
        </StyledNav>
        <UserSection>
            <ProfileBtn>Profile</ProfileBtn>
            <SettingsBtn>Settings</SettingsBtn>
            <LogoutBtn onClick={()=>{
                updateUser(null)
                sessionStorage.removeItem('user');
                navigate("/login");
            }}>Logout</LogoutBtn>
        </UserSection>
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
    background-color: ${(props)=> (props.isActive? props.theme.main.primary : props.theme.main.secondary )};
    width: 300px;
    min-width: 300px;
    height: 100%;
    position: relative;
    display: grid;
    grid-template-rows: 1fr 6fr 3fr;
`;
const Logo = styled.img`
    display: block;
    margin-top: 20px;
    left: 50%;
    position: relative;
    transform: translate(-50%,0);
    width: 250px;

`;

const StyledNav = styled.nav`

.is-active{
        background-color: ${(props) => props.theme.main.primary};
        color: ${(props) => props.theme.main.secondary};
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        /* :after,:before{
            border-right: 4px solid green;
            content: '';
            height: 45px;
            right: -0px;
            position: absolute;
            width: 100px;
        }
        :after{
            border-bottom-right-radius: 10px;
            transform: translateY(-100%);
        }
        :before{
            border-top-right-radius: 10px;
            transform: translateY(100%);
        } */
        
        
}

margin-top: 40%;
display: flex;
flex-direction: column;
align-items: flex-end;
gap: 20px;
position: relative;
`
const SLink = styled(NavLink)`
    height: 50px;
    position: relative;
    text-decoration: none;
    text-align: center;
    font-size: ${variable.font.size_xl};
    color: ${(props) => props.theme.main.primary};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    span{
        margin-left: 10%;
        display: inline;
        position: relative;
    }    
`;

const UserSection = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 80%;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    gap: 3rem;
    button {
        font-size: ${variable.font.size_xl};
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        
    }
`;

const SettingsBtn = styled.button`
    color: ${(props)=> props.theme.main.primary};
`

const ProfileBtn = styled.button`
    color: ${(props)=> props.theme.main.primary};

`;

const LogoutBtn = styled.button`
  
  color: ${(props)=>props.theme.main.accentRed}
`;

export default RiderNav