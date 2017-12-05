import React from 'react';
import { Button } from 'semantic-ui-react'
import { withRouter } from 'react-router'


const User = (props) => {

  const logOut = () =>{
    localStorage.clear()
    props.history.push("/login")
  }

  return (
    <div>
      Logged In As: <Button basic color="yellow" onClick={() => alert("Should link to a profile page!")}>{props.currentUser}</Button>
      <Button basic color="teal" onClick={logOut}>Log Out</Button>
    </div>
  )
}

export default withRouter(User);
