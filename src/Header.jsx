import styled from "styled-components";
import logo from '../../public/logo.png';

function header() {

    return (
    <Wrapper>
        <img src={logo} alt="" />
        

    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    height: 90px;
`;


export default header;