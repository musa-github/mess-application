import React, { useContext } from 'react';
import { Store } from "../context";
function NavUserIcon() {
  const { userDetails  } = useContext(Store);
    
    return (
       <img className="nav-profile" src={userDetails.url?userDetails.url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8AJ7pEIEOJAnWLs4P1o6wMRFg3Z64KkJRg&usqp=CAU"} alt="frofile"/>
    )
}

export default NavUserIcon
