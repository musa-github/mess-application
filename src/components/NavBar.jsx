import React, { useContext, useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Store } from "../context";
import { auth } from "../firebase";
import NavUserIcon from "./NavUserIcon";
function NavBar() {
  const { currentUser, userDetails } = useContext(Store);
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

        <div className={navLink ? "sidenav-show nav__link" : "nav__link"}>
          <NavLink
            to="/"
            onClick={handleNavlink}
            activeClassName="active-nav"
            exact
          >
            home
          </NavLink>
          <NavLink
            to="/present"
            onClick={handleNavlink}
            className={email !== adminEmail ? "d-none" : "d-inline-block"}
            activeClassName="active-nav"
            exact
          >
            present
          </NavLink>
          <NavLink
            to="/marketingCost"
            onClick={handleNavlink}
            className={email !== adminEmail ? "d-none" : "d-inline-block"}
            activeClassName="active-nav"
            exact
          >
            marketingCost
          </NavLink>

          <NavLink
            to="/admin"
            onClick={handleNavlink}
            className={email !== adminEmail ? "d-none" : "d-inline-block"}
            activeClassName="active-nav"
            exact
          >
            admin
          </NavLink>

          <NavLink
            to="/login"
            onClick={handleNavlink}
            activeClassName="active-nav"
            exact
          >
            login
          </NavLink>
          <NavLink
            to="/signUp"
            onClick={handleNavlink}
            activeClassName="active-nav"
            exact
          >
            sign up
          </NavLink>
          <NavLink
            to="/logout"
            onClick={handleLogout}
            activeClassName="active-nav"
            exact
          >
            Log out
          </NavLink>

          <NavLink
            to="/userProfileParent"
            onClick={handleNavlink}
            activeClassName="active-nav"
            exact
          >
            {userDetails ? <NavUserIcon /> : "profile"}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
