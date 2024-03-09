import "bootstrap/dist/css/bootstrap.css"
import { useRef, useState } from "react"



export default function FormVM() {

   const name = useRef();
   const email = useRef();
   const message = useRef();
   const acceptConditions = useRef();
   const [vl, setVl] = useState(false);
   const [err, setErr] = useState([]);

   const restForm = () => {
      name.current.value = "";
      email.current.value = "";
      message.current.value = "";
      acceptConditions.current.checked = false;
   }
   const setErrs = () => {
      return<ul>
         {err.map(E => <li>{E.msg}</li>)}
         </ul>
   }
   const ft_valid = () => {
      setErr([]);
      const nameValue = name.current.value;
      const emailValue = email.current.value;
      const msgValue = message.current.value;
      const apConditions = acceptConditions.current.checked;
      let val = 1;
      if (nameValue.trim() === '')
      {
         val = 0;
         setErr (prevState =>
            [...prevState,{msg :"name requierd !"}]
         )
      }
      if (emailValue.trim() === '')
      {
         val = 0;
         setErr (prevState =>
            [...prevState,{msg :"email requierd !"}]
         )
      }
      if (msgValue.trim() === '')
      {
         val = 0;
         setErr (prevState => [...prevState,{msg :"msg requierd !"}]);
      }
      if (!apConditions)
      {
         val = 0;
         setErr (prevState =>
            [...prevState,{msg :"acceptConditions requierd !"}]
            )
      }
      if (val)
         setVl(true);
      else
         setErrs();

      console.log({
         nameValue,
         emailValue,
         msgValue,
         apConditions,
      })
   }
   const handleSubmit = (e) =>{
      e.preventDefault();
      ft_valid()
      restForm();
   }
  return (
       <div className={'container-fluid w-75 mx-auto my-5'}>
         <form onSubmit={handleSubmit}>
            <h1>Contact form</h1>
            {vl ? <div className="alert alert-success">
            <strong>success</strong> message has sent successfully !
             </div>: ""
             }
            {err.length > 0 ? <div className="alert alert-danger">
            <strong>Error</strong>{setErrs()}
             </div>: ""
             }
            <hr/>
            {/*<-- Name input -->*/}
            <div className="form-outline mb-4">
               <label className="form-label" htmlFor="name">Name</label>
               <input type="text" id="name" className="form-control" ref={name}/>
            </div>

            {/*<-- Email input -->*/}
            <div className="form-outline mb-4">
               <label className="form-label" htmlFor="email">Email address</label>
               <input type="text" id="email" className="form-control" ref={email}/>
            </div>
            {/*<-- Message input -->*/}
            <div className="form-outline mb-4">
               <label className="form-label" htmlFor="message">Message</label>
               <textarea className="form-control" id="message" rows="4" ref={message}></textarea>
            </div>

            {/*<-- Checkbox -->*/}
            <div className="form-check mb-4">
               <div className="d-flex">
                     <input className="form-check-input me-2"
                     type="checkbox" id="acceptAllConditions" ref={acceptConditions}/>
                     <label className="form-check-label" htmlFor="acceptAllConditions">
                        Accept all conditions
                     </label>
               </div>
            </div>

            {/*<-- Submit -->*/}
            <button type="submit" className="btn btn-primary w-100 mb-4">Submit</button>
         </form>
         </div>
  )
}


