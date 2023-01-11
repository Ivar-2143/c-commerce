import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Popular from './pages/Popular';
import Category from './pages/Category';
import ProductPage from './pages/ProductPage';
import Searched from './pages/Searched';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';

const theme = {
  main: {
    primary: "#E8E9F3",
    secondary: "#272635",
    accent: "#FFAE03",
    accentBlue: "#429BFA",
    accentGreen: "#DBFE87",
    accentRed: "#EA526F",
    shadedPrimary: "#e5e5e5",
    shadedRed: "#E11B41",
    white: "#fff",
    tintedSecondary: "#424242",
    tintedBlue: "#429BFA"
  }
}

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  console.log(location.state);
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* {isLoggedIn && ( */}
          <Routes location={background || location}>            
            <Route path={"/"} element={<Home/>}>
              <Route index element={<Popular />}/>
              <Route path='products/:type' element={<Category />} />
            </Route>
            <Route path='search/:searched' element={<Searched />} />
            <Route  path={"/login"} element={<LogIn/>} />
            <Route path={"/signup"} element={<SignUp/>} />
            <Route path={"/cart"} element={<Cart/>}/>
          </Routes>
         {/* )} */}
        {background && (
          <Routes>
            <Route path={`product/:id`} element={<ProductPage />} />
          </Routes>
        )}   
      </ThemeProvider>
    </div>
  );
}

export default App;
