import  { useContext } from 'react'
import Crad from './Crad'
import userContext from './cn'


export default function User() {

   const {user} = useContext(userContext)
   const {change} = useContext(userContext)
  return (

     <Crad>
     <div className='alert alert-success text-center'><strong>login : </strong>{user}</div>
     <button className='btn btn-outline-primary' onClick={() => {change()} }>
      change</button>
     </Crad>
  )
}


