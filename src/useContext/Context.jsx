import  { useState } from 'react'
import User from './User'
import "bootstrap/dist/css/bootstrap.css"

import userContext from './cn';
export default function Context() {

   const [user,setUser] = useState("yassine");
   const change = () => {setUser("nassibi")}
   const cv = {user,change}

   return <userContext.Provider value={cv}>
      <User/>
   </userContext.Provider>
}


