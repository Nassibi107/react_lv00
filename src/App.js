import { Route, Router, Routes, BrowserRouter as Way } from "react-router-dom";

import Prd from "./store/Prd";
import FormVM from "./formValid/FormVM";
import Pagea from "./lang/Pagea";
import LayoutS from "./LayoutS";
import Pnof from "./Pnof/Pnof";

function App() {
  return (
    <Way>
    <Routes>
      <Route path="/"  element={<LayoutS/>} >
        <Route index  element={<Prd/>} />
        <Route path="/lang" element = {<Pagea/>}  />
        <Route path="/contact" element = {<FormVM/>}  />
        <Route path="/*" element = {<Pnof/>}  />
      </Route>
    </Routes>
    </Way>
  )
}

export default App

