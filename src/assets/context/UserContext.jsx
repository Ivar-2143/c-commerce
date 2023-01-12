import { createContext, useState} from "react";

export const UserContext = createContext();

function UserContextProvider() {
  const [user,setUser] = useState([]);
  const [cart,setCart] = useState([]);
  
  
  return (
    <UserContext.Provider user={user} updateUser={setUser} cart={cart} updateCart={setCart} >
       
    </UserContext.Provider>
  )
}

export default UserContextProvider;