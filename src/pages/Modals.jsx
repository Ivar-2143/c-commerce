import { Route, Routes } from "react-router-dom";
import ProductPage from "./ProductPage";
import styled from "styled-components";

function Modals() {
    

  return (
    <Wrap>
        
        <Routes>
            <Route path={"/Category/"}>

            </Route>
            <Route path={"/:id"} element={<ProductPage />}/>
        </Routes>
    </Wrap>
  )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
`;

export default Modals