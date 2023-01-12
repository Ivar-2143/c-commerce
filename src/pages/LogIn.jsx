import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import backDrop from '../assets/market aerial view.jpg';
import logo_ghostWhite from '../assets/logos/logo_ghostWhite.png';
import banner from '../assets/fresh_products_banner.jpg';
import * as variable from '../components/variables';
import { ContentWrapper, ImageWrapper, BgContainer, Background, GlassFilter, LogoOverlay, SideImage } from '../components/globalStyles';
import { UserContext } from '../assets/context/UserContext';
import { UserInfo } from '../App';

let currentLogInUser;

const LogIn = () => {
  const {user,updateUser, cart, updateCart} = useContext(UserInfo);
  const navigate = useNavigate()
  const handleSignIn = async (event) =>
  {
    event.preventDefault();
    const {0: {value: email}, 1:{value: password} } =  event.target
    const data = await fetch(`http://localhost:9000/users`)
    .then(res => res.json()) 
    .catch(err => console.log(`SIGN-IN ERROR: ${err.message}`))
    
    const filteredCredential = data.filter(data => data.email === email && data.password === password)
    if (filteredCredential.length === 1)
    {
      alert("Login success!")
      currentLogInUser = filteredCredential
      
      updateUser(filteredCredential[0]);
      updateCart(filteredCredential[0].cart);
      
      (filteredCredential[0].type == "customer")? navigate("/") : navigate("/riders");
      
    }
    else
    {
      alert("Incorrect login")
    }
  }

  return (
    <BgContainer>
      <Background src={backDrop}/> 
      <GlassFilter background="background"/>
      <ContentWrapper >
        <ImageWrapper>
        <LogoOverlay src={logo_ghostWhite} />
        <GlassFilter />
        <SideImage src={banner} alt="" />
        </ImageWrapper>
        <FormWrapper>
          <h1> Log in </h1>
          <form onSubmit={handleSignIn}>
            <label>
              Email
            </label>
            <input type="email"></input>
            <label>
              Password
            </label>
            <input type="password"></input>
            <input type="submit" value="Log in"></input>
          </form>
          <p>Not signed in yet? <Link to="/signup">Click here to sign up.</Link></p>
        </FormWrapper>
      </ContentWrapper>
    </BgContainer>
  )
}


const FormWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items:center;
  p{
      font-size: ${variable.font.size_s};
    }
  form{
    width: 70%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    label{
      font-size: ${variable.font.size_xl};
      margin-top: 20px;
    }
    input{
      width: 100%;
      border: none; 
      font-size: ${variable.font.size_l};
    }
    input[type='email'], input[type='password']{
      height: 30px;
      padding: 4px;
      border: 2px solid ${(props)=> props.theme.main.secondary};
      border-radius: ${variable.radius.smooth_edge};
      color: ${(props)=> props.theme.main.primary};
      background-color: ${(props)=> props.theme.main.secondary};
      outline: none;
      &:hover,&:focus{
        border: 2px solid ${(props)=> props.theme.main.accent};
      }
    }
    input[type="submit"]{
      height: 40px;
      border-radius: ${variable.radius.round_edge};
      cursor: pointer;
      justify-self: end;
      color: ${(props)=> props.theme.main.secondary};
      background-color: ${(props) => props.theme.main.accent};
      margin-top: 50px;
      border: none;
      &:hover{
        border: 2px solid ${(props)=> props.theme.main.secondary}
      }
    }
  }
`;

export {currentLogInUser};
export default LogIn;
