import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState, createContext } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Popular from './pages/Popular';
import Category from './pages/Category';
import ProductPage from './pages/ProductPage';
import Searched from './pages/Searched';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import UserContext from './assets/context/UserContext';
import UserContextProvider from './assets/context/UserContext';

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
export const UserInfo = createContext();


function App() {
  const location = useLocation();
  const [user,setUser] = useState(null);
  const [cart,setCart] = useState([]);
  const background = location.state && location.state.background;
  console.log(location.state);

  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <UserInfo.Provider value={{user: user, updateUser: setUser, cart: cart, updateCart: setCart}} >
          {/* {isLoggedIn && ( */}
            <Routes location={background || location}>            
              <Route path={"/"} element={<Home/>}>
                <Route index element={<Popular />}/>
                <Route path='products/:type' element={<Category />} />
                <Route path='search/:searched' element={<Searched />} />
              </Route>
              <Route path={"/login"} element={<LogIn/>} />
              <Route path={"/signup"} element={<SignUp/>} />
              <Route path={"/cart"} element={<Cart/>}/>
            </Routes>
          {/* )} */}
          {background && (
            <Routes>
              <Route path={`product/:id`} element={<ProductPage />} />
            </Routes>
          )}   
        </UserInfo.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
