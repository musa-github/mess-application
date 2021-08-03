import React, { useContext, useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { Store } from "../context";
import { auth } from "../firebase";
import NavUserIcon from "./NavUserIcon";
function NavBar() {
  const { currentUser, userDetails } = useContext(Store);
  // console.log(" user from navbar", currentUser.email);
  const [error, setError] = useState();
  const [navLink, setnavLink] = useState(false);
  const history = useHistory();
  const email = currentUser && currentUser.email;
  const adminEmail = "smabumusa98@gmail.com";

  async function handleLogout() {
    setError("");

    try {
      await auth.signOut();
      history.push("/login");
    } catch {
      setError(alert(error));
    }
  }
  const handleNavlink = () => {
    setnavLink(!navLink);
  };

  return (
    <nav>
      <div className="nav">
        <Link to="/">
          <span className="nav__brand">messAccount</span>
        </Link>

        <Link>
          <button
            onClick={handleNavlink}
            type="button"
            className="nav__button  d-md-none"
          >
            <FaAlignRight className="nav__icon" />
          </button>
        </Link>

        <div
          className={
            navLink
              ? " nav__link d-block column side-nav"
              : "nav__link d-md-block d-none"
          }
        >
          <Link to="/"> home</Link>
          <Link
            className={email !== adminEmail ? "d-none" : "d-inline-block"}
            to="/present"
          >
            present
          </Link>
          <Link
            className={email !== adminEmail ? "d-none" : "d-inline-block"}
            to="/marketingCost"
          >
            marketingCost
          </Link>

          <Link
            className={email !== adminEmail ? "d-none" : "d-inline-block"}
            to="/admin"
          >
            admin
          </Link>

          <Link to="/login"> login</Link>
          <Link to="/signUp"> sign up</Link>
          <Link to="/logout" onClick={handleLogout}>
            Log out
          </Link>

          <Link to="/userProfileParent">
            {userDetails ? <NavUserIcon /> : "profile"}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
