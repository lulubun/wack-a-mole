import React from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";


function Main() {
  const user = null;

  return
        user ?
        (<ProfilePage />)
      :
        (<Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <MoleGroup path = "wack-a-mole" />
        </Router>);
}
export default Main;