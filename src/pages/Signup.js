import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../firebase";

function Signup() {
  //Global context
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
   

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError(
        "Password does not matching plese input correct password"
      );
    } else {
      setError("Succsess !");
    }

    try {
      setError("");
      setLoading(true);

      await auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      ).then(cred=>{
        return db.collection("memberInfo").doc(cred.user.uid).set({
          
      sl: null,
      name: "",
      desig: "",
      phone:"",
      url:"",
      cashDiposit: null,
      perviousDiposited: null,
      previousOwe: null,
      currentDiposit: null,
      totalMarketingCost: null,
      messDabte: null,
      messOwe: null,
      totalMill: null,
      milRate: null,
      totalMillCost: null,
      totalMembersMill: null,
      
      mills:{
         one: null,
        two: null,
        three: null,
        four: null,
        five: null,
        six: null,
        seven: null,
        eight: null,
        nine: null,
        ten: null,
        eleven: null,
        twolve: null,
        thirteen: null,
        fourteen: null,
        fifteen: null,
        sixteen: null,
        seventeen: null,
        eightteen: null,
        ninteen: null,
        towenty: null,
        towentyOne: null,
        towentyTwo: null,
        towentyThree: null,
        towentyFour: null,
        towentyFive: null,
        towentySix: null,
        towentySeven: null,
        towentyEight: null,
        towentyNine: null,
        thirty: null,
        thirtyOne: null
       } 
        });
      })

      history.push("/login")
     

    } catch {
      setError("Failed to create account");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col sign__form">
            <div className="form-container">
              <h4 className="form__title">Sign up </h4>
              <span className="text-danger"> {error && error}</span>
              <form onSubmit={handleSubmit}>
                <span className="form__span">email</span>
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  ref={emailRef}
                />
                <span className="form__span">password</span>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  ref={passwordRef}
                />
                <span className="form__span">Confirm password</span>
                <input
                  ref={confirmPasswordRef}
                  type="password"
                  placeholder="confirm password"
                  name="confirmPassword"
                />
                <button disabled={loading} type="submit" className="btn">
                  Submit
                </button>
              </form>
              <div className="text-center mt-2 ">
                <span className="haveAn__account">Already have an account?</span> <Link to="/login">Log In</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
