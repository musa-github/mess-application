import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Store } from "../context";
import { db, storage } from "../firebase";
import UserProfileShow from "./UserProfileShow";

function UserProfile() {
  const { currentUser, userDetails } = useContext(Store);
  const nameRef = useRef();
  const desigRef = useRef();
  const phoneRef = useRef();
  const history = useHistory();
  const [file, setFile] = useState();
  const [edit, setEdit] = useState(true);
  const [loading, setLoading] = useState(false);

  const handlefile = (e) => {
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
            setLoading(true);
            if (currentUser) {
              db.collection("memberInfo").doc(currentUser.uid).update({
                url: url,
                name: nameRef.current.value,
                desig: desigRef.current.value,
                phone: phoneRef.current.value,
              });
              history.push("/");
              setLoading(false);
            }
          });
      }
    );
  };

  const handleEdit = (e) => {
    setEdit(!edit);
  };

  return (
    <div className="row user mt-2">
      <div className="col-md-4  text-center ">
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
            <span
              className={edit ? " d-inline-block edit_profile btn" : "d-none "}
              onClick={handleEdit}
            >
              Edit
            </span>

            <div className="card-body profile_card_body">
              {edit ? (
                <UserProfileShow />
              ) : (
                <>
                  <label htmlFor="file" className="file_label">
                    Choge profile
                  </label>
                  <input
                    required
                    onChange={handlefile}
                    className="file"
                    type="file"
                    name="file"
                    id="file"
                  />
                  <input
                    required
                    readOnly={edit}
                    ref={nameRef}
                    type="text"
                    placeholder="Name : "
                    className="user_profile_input"
                  />

                  <input
                    required
                    readOnly={edit}
                    ref={desigRef}
                    type="text"
                    placeholder="Desig : "
                    className="user_profile_input"
                  />

                  <input
                    readOnly={edit}
                    ref={phoneRef}
                    type="text"
                    placeholder="Phone : "
                    className="user_profile_input"
                  />
                  <button
                    className="btn btn-primary profile_submit_button"
                    type="submit"
                    disabled={loading}
                  >
                    Submit
                  </button>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;
