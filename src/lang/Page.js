import { useState } from "react";
import Lang from "./Lang";


export default  function Page() {
   const [langs,setLangs] = useState("EN")
   const show_me = () =>
   {
      if (langs === "EN")
         return <div className="alert alert-primary">
         hello
       </div>
      else if  (langs === "FR")
         return <div className="alert alert-primary">
         bonjour
       </div>
      return <div className="alert alert-primary">
      hola
   </div>
   }
  return (
      <>
      <Lang onChangeLang = {(v) => {setLangs(v)}} />
         {show_me()}
      </>
  )
}


