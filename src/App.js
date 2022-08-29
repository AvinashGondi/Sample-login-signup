import React from "react";
import SignUp from "./Components/Signup/signup";
import Login from "./Components/Login/login";
import {
  BrowserRouter as 
  Route,
  Router,
  Routes,
} from "react-router-dom";
  
function App()  {

  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}>
          {/* <Route index element={<Login />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
  
}

export default App;
