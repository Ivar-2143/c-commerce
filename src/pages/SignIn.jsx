import React from 'react'
import { Link } from 'react-router-dom';


const SignIn = () => {

  const handleSignIn = async (event) =>
  {
    event.preventDefault();
    const {0: {value: email}, 1:{value: password} } =  event.target
    const data = await fetch(`http://localhost:9000/users`)
    .then(res => res.json()) 
    .catch(err => console.log(`SIGN-IN ERROR: ${err.message}`))
    
    if (data.filter(data => data.email === email && data.password === password).length === 1)
    {
      alert("Login success!")
    }
    else
    {
      alert("Incorrect login")
    }
  }

  return (
    <>
    <h1> Sign in </h1>
    <form onSubmit={handleSignIn}>
      <label>
        Email
        <input type="email"></input>
      </label>
      <label>
        Password
        <input type="password"></input>
      </label>
      <input type="submit" value="Sign in"></input>
    </form>
    <Link to="/signup"><p>Not signed it yet? Click here to sign up.</p></Link>
    </>
  )
}

export default SignIn;
