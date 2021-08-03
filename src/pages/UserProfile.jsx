import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Store } from "../context";
import { db, storage } from "../firebase";

function UserProfile(props) {
  const { currentUser, userDetails } = useContext(Store);
  const nameRef = useRef();
  const desigRef = useRef();
  const phoneRef = useRef();
  const history = useHistory();

  const [file, setFile] = useState();

  const handleChange = (e) => {
    if (e.target.files[0]) {
      return setFile(e.target.files[0]);
    }
  };

  const onsubmit = (e) => {
    e.preventDefault();

    const uploadTask = storage.ref(`images/${file.name}`).put(file);
    uploadTask.on(
      "state changed",
      //progress
      (snapshot) => {},
      //error
      (error) => {
        console.log(error);
      },
      //get url
      () => {
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            if (currentUser) {
              db.collection("memberInfo").doc(currentUser.uid).update({
                url: url,
                name: nameRef.current.value,
                desig: desigRef.current.value,
                phone: phoneRef.current.value,
              });
              history.push("/");
            }
          });
      }
    );
  };

  return (
    <div className="row user mt-2">
      <div className="col-md-6 offset-3 text-center ">
        <form onSubmit={onsubmit}>
          <div className="card card_width ">
            <img
              className="card-img-top user__img"
              src={
                userDetails
                  ? userDetails.url
                  : "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
              }
              alt="set profile"
            />

            <label htmlFor="file" className="file_label">
              Choge profile
            </label>
            <input
              onChange={handleChange}
              className="file"
              type="file"
              name="file"
              id="file"
            />

            <div className="card-body">
              <h3 className="card-title">
                {userDetails ? userDetails.name : "your name"}
              </h3>
              <p className="card-text">
                {userDetails ? userDetails.desig : "your designation"}
              </p>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name"> Name</label>
            <input
              ref={nameRef}
              type="text"
              name="name"
              id="name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Designation"> Designation</label>
            <input
              ref={desigRef}
              type="text"
              name="Designation"
              id="Designation"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone"> Phone number</label>
            <input
              ref={phoneRef}
              type="number"
              name="phone"
              id="phone"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;
