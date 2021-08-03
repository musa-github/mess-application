import React from "react";
import { Link } from "react-router-dom";

function Messmember(props) {
  const { id } = props;

  return (
    <div className="col-md-3 ">
      <div className="card m-1 card_width">
        <img src={props.url} alt="profile" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title"> {props.name}</h5>
          <p className="card-text">{props.desig}</p>
          <Link to={`/messmember/${id}`} className="btn">
            view details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Messmember;
