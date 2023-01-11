import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Pages from './Pages';
import styled from 'styled-components';
import { useState, useEffect} from 'react';
import { BrowserRouter, Outlet, useNavigate } from 'react-router-dom';
import ProductPage from './ProductPage';
import Modals from './Modals';

function Home(){
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{

      if(!isLoggedIn){
          console.log(!isLoggedIn);
          navigate('/login');
      }
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