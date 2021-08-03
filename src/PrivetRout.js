import React, { useContext } from "react"
import { Redirect, Route } from "react-router-dom"
import { Store } from "./context"

export  function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useContext(Store)
  
  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}


