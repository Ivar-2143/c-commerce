import React from 'react'
import { BgContainer, Background, ImageWrapper, ContentWrapper, LogoOverlay, SideImage, GlassFilter} from '../components/globalStyles'
import styled from 'styled-components'
import backDrop from '../assets/market aerial view.jpg';
import { Link } from 'react-router-dom';
import * as variable from '../components/variables';
import logo_ghostWhite from '../assets/logos/logo_ghostWhite.png';

const SignUp = () => {

  const handleSignUp = async (event) =>
  {
    event.preventDefault()
    let hasDuplicate = false
    const {0: {value: firstName}, 1: {value: lastName},
    2: {value: email}, 3: {value: password},
    4: {value: mobileNumber}, 5: {value: userAddress}} = event.target
    const acquireData = await fetch(`http://localhost:9000/users`)
    .then(result => result.json())
    .then(data => data.filter(currentData => currentData.email === email))
    .then(filteredData => 
      {
        filteredData.length >= 1 ? hasDuplicate = true : console.log("No duplicates found.")
      })
    
    if (hasDuplicate) {
      alert("The email that you entered already exists in the database. Please use a new one.")
      return
    }

    const response = await fetch(`http://localhost:9000/users`, 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        address: userAddress,
        userMobileNumber: mobileNumber, 
        cart: [],
        orders: [],
        type: "customer"
  })
    })
    .catch(err => console.log(err.message))

    response.status === 200 || 201 ? alert("You have successfully registered.") : alert("Registration error.")
    
  }

  return (
    <BgContainer>
      <Background src={backDrop}/>
      <ContentWrapper>
      <ImageWrapper>
        <LogoOverlay src={logo_ghostWhite} />
        <GlassFilter />
        <SideImage src={backDrop} alt="" />
      </ImageWrapper>
      <FormWrapper>
        <h1> Sign in </h1>
        <form onSubmit={handleSignUp}>
          <label> 
            First Name
          </label>
          <input type="text"></input>
          <label>
            Last Name
          </label>
          <input type="text"></input>
          <label>
            Email
          </label>
          <input type="email"></input>
          <label>
            Password
          </label>
          <input type="password"></input>
          <label>
            Mobile Number
          </label>
          <input type="text"></input>
          <label>
            Address
          </label>
          <input type="text"></input>
          <input type="submit" value="Create Account"></input>
          <p>Already have an account? <Link to="/login">Click here to log in.</Link></p>
        </form>
      </FormWrapper>
      </ContentWrapper>
    </BgContainer>
    
  )
}


const FormWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  form{
    width: 85%;
    height: 80%;
    display: flex;
    flex-direction: column;
    position: relative;
    p{
      font-size: ${variable.font.size_s};
      position: relative;
      width: 100%;
      text-align: center;
      margin-top: 2px;
    }
    label{
      margin-top:4px;
    }
    input{
      height: 30px;
      border-radius: ${variable.radius.smooth_edge};
      border: 2px solid ${(props)=> props.theme.main.secondary};
      background-color: ${(props) => props.theme.main.secondary};
      color: ${(props)=> props.theme.main.primary};
      padding: 4px;
      outline: none;
      &:hover,&:focus{
        border: 2px solid ${(props)=> props.theme.main.accent};
      }
    }
    input[type="submit"]{
      background-color: ${(props) => props.theme.main.accent};
      height: 40px;
      border-radius: ${variable.radius.round_edge};
      margin-top: 20px;
      color: ${(props)=> props.theme.main.secondary};
      cursor: pointer;
      border: none;
      &:hover{
        border: 2px solid ${(props)=> props.theme.main.secondary};
      }
      
    }
  }
`;

export default SignUp;