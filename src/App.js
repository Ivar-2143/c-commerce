import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import { Route, Routes, useLocation } from 'react-router-dom';
import Popular from './pages/Popular';
import Category from './pages/Category';
import ProductPage from './pages/ProductPage';
import Searched from './pages/Searched';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const theme = {
  main: {
    primary: "#F7F7FF",
    secondary: "#000",
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
        <Routes location={background || location}>
          <Route path={"/"} element={<Home/>}>
            <Route index element={<Popular />}/>
            <Route path='products/:type' element={<Category />}>
          </Route>
          <Route path='search/:searched' element={<Searched />} />
          </Route>
          <Route path={"/signin"} element={<SignIn/>}>
          </Route>
          <Route path={"/signup"} element={<SignUp/>}>
          </Route>
        </Routes>
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
