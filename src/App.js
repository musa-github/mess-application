import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MarketingCost from "./pages/MarketingCost";
import Present from "./pages/Present";
import Signup from "./pages/Signup";
import SingleMemberInfo from "./pages/SingleMemberInfo";
import UserProfileParent from "./pages/UserProfileParent";
import { PrivateRoute } from "./PrivetRout";


function App() {
  
  return (
      <>

  <NavBar/>
  <div className="container-fluid">
  <Switch>
  
    <PrivateRoute path="/present" component={Present}/>
    
   

    <PrivateRoute path="/marketingCost" component={MarketingCost}/>
   
    <PrivateRoute path="/admin" component={Admin}/>
    
      <Route path="/login" component={ Login}/>
       
      
      <Route path="/signUp" component={  Signup}/>
       
      
      <Route path="/messmember/:id" component={SingleMemberInfo}/> 
      <Route path="/userProfileParent" component={UserProfileParent}/>
      
      
      <Route path="/" component={Home}/>
        
     

  
   </Switch>
 </div>

       </>
        
        
     
  );
}

export default App;
