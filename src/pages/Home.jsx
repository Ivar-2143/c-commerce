import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Pages from './Pages';
import styled from 'styled-components';
import { useState, useEffect, useContext} from 'react';
import { BrowserRouter, json, Outlet, useNavigate } from 'react-router-dom';
import ProductPage from './ProductPage';
import Modals from './Modals';
import { currentLogInUser } from './LogIn';
import { UserInfo } from '../App';

function Home(){
    const currentUser = JSON.parse(sessionStorage.getItem("user"));
    const {user,updateUser, cart, updateCart} = useContext(UserInfo);
    console.log();
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
      if(!currentUser){
          console.log(!isLoggedIn);
          setIsLoggedIn(!isLoggedIn)
          navigate('/login');
      }
      else
      {
        updateUser(currentUser);
        updateCart(currentUser.cart);

        console.log(user);
      }
    },[]);

    useEffect(()=>{
      console.log(cart);
    },[]);

    
    return(
        <>
            <Header/>
            <ContentWrap>
                <Search/>
                <Categories/>
                <Outlet />
            </ContentWrap>
        </>
    )
}

const ContentWrap = styled.div`
    width: 90%;
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
    height: calc(100vh);
`;

const Wrapper = styled.div`
  position: relative;  
`;

export default Home;