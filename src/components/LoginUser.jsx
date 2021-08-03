import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
const LoginUser = () => {
  // let ref = React.createRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
      history.push("/userProfileParent");
    } catch {
      setError("Failed to login ");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col sign__form">
            <div className="form-container">
              <h4 className="form__title">Login </h4>
              <span className="text-danger">{error && error}</span>

              <form onSubmit={handleSubmit}>
                <span className="form__span">email</span>
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="Enter email"
                  name="email"
                />
                <span className="form__span">password</span>
                <input
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                  name="password"
                />

                <button disabled={loading} type="submit" className="btn">
                  Login
                </button>
              </form>
              <Link to="/signUp"> need an account</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginUser;
