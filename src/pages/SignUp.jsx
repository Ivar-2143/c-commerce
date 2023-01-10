import React from 'react'

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
    <>
    <h1> Sign in </h1>
    <form onSubmit={handleSignUp}>
      <label>
        First Name
        <input type="text"></input>
      </label>
      <label>
        Last Name
        <input type="text"></input>
      </label>
      <label>
        Email
        <input type="email"></input>
      </label>
      <label>
        Password
        <input type="password"></input>
      </label>
      <label>
        Mobile Number
        <input type="text"></input>
      </label>
      <label>
        Address
        <input type="text"></input>
      </label>
      <input type="submit" value="Create Account"></input>
    </form>
    </>
  )
}

export default SignUp