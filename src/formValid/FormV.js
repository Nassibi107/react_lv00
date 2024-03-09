import"bootstrap/dist/css/bootstrap.css"
import  {useRef, useState } from "react"

function FormV() {

      const nameField =useRef();
      const emailField =useRef();
      const messageField =useRef();
      const countryField =useRef();
      const acceptConditionsField = useRef();
      const [err,setErr] = useState([]);

      const handleSubmit = (e) =>
      {
         const name = nameField.current.value;
         const email = emailField.current.value;
         const msg = messageField.current.value;
         const country = countryField.current.value;
         const accept = acceptConditionsField.current.checked;
         let valid = true;

         if (name.trim() === '')
         {
            valid = false;
            setErr(prevState => {
               return [...prevState, 'name required']
           })

         }
         if (email.trim() === '')
         {
            valid = false;
            setErr(prevState => {
               return [...prevState, 'email required']
           })
         }
         if (msg.trim() === '')
         {
            valid = false;
            setErr(prevState => {
               return [...prevState, 'msg required']
           })
         }
         if (country.trim() === '')
         {
            valid = false;
            setErr(prevState => {
               return [...prevState, 'conutry required']
           })
         }
         if (!accept)
         {
            valid = false;
            setErr(prevState => {
               return [...prevState, 'accept required']
           })
         }

         if (!valid)
         {
            e.preventDefault();
         }

         console.log({
            name,
            email,
            msg,
            country,
            accept,
         })
      }

 return <div className={'container-fluid w-75 mx-auto my-5'}>
         <form onSubmit={handleSubmit}>
            <h1>Contact form</h1>
            {err.length > 0 ?
            <div className="alert alert-danger" role="alert">
                <strong>Error</strong>
                <ul>
                    {err.map((error,key) => <li key={key}>{error}</li> )}
                </ul>
            </div>
            :''
        }
            <hr/>
            {/*<-- Name input -->*/}
            <div className="form-outline mb-4">
               <label className="form-label" htmlFor="name">Name</label>
               <input type="text" id="name" className="form-control" ref={nameField}/>
            </div>

            {/*<-- Email input -->*/}
            <div className="form-outline mb-4">
               <label className="form-label" htmlFor="email">Email address</label>
               <input type="text" id="email" className="form-control" ref={emailField}/>
            </div>

            {/*<-- Message input -->*/}
            <div className="form-outline mb-4">
               <label className="form-label" htmlFor="message">Message</label>
               <textarea className="form-control" id="message" rows="4" ref={messageField}></textarea>
            </div>

            {/*<-- Country select -->*/}
            <div className="form-group mb-4">
               <label>Country</label>
               <label htmlFor="country"></label>
               <select className="form-control" id="country" ref={countryField}>
                     <option value=''>Select country</option>
                     <option value='MA'>Maroc</option>
                     <option value='DZ'>Algérie</option>
                     <option value='TN'>Tunisie</option>
               </select>
            </div>

            {/*<-- Checkbox -->*/}
            <div className="form-check mb-4">
               <div className="d-flex">
                     <input className="form-check-input me-2"
                     type="checkbox" id="acceptAllConditions" ref={acceptConditionsField}/>
                     <label className="form-check-label" htmlFor="acceptAllConditions">
                        Accept all conditions
                     </label>
               </div>
            </div>

            {/*<-- Submit -->*/}
            <button type="submit" className="btn btn-primary w-100 mb-4">Submit</button>
         </form>
         </div>
   }


export default FormV

