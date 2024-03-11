import { Link, Outlet } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"

export default function LayoutS() {
  return (
    <>
      <ul className="nav justify-content-center">
         <li className="nav-item active">
            <Link to='store' className="nav-link">store</Link>
         </li>
         <li className="nav-item active">
            <Link to= 'lang' className="nav-link">lang</Link>
         </li>
         <li className="nav-item active">
            <Link to = 'contact'className="nav-link">contact</Link>
         </li>
      </ul>
      <div className="container-fluid w-75 mx-auto">
                <Outlet />
       </div>
    </>
  )
}



