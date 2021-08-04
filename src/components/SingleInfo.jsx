import React from "react";

function SingleInfo(props) {
  return (
    <div className="row mt-2 single_info">
      <div className="col-md-10">
        <div className="card">
          <div className="card-body">
            <div className="profile-pic">
              <img src={props.url} alt="" className="card-img-top" />
              <p className="card-text"> {props.name}</p>
              <p className="card-text"> {props.desig}</p>
            </div>
            <div className="taka">
              <p>নগদ জমা = {props.cashDiposit}</p>
              <p> পূর্বের দেনা = {props.previousOwe}</p>
              <p> পূর্বের পাওনা = {props.perviousDiposited}</p>
              <p> মোট জমা = {props.currentDiposit}</p>
            </div>
            <div className="marketing__cost">
              <p> মোট মিল = {props.totalMembersMill}</p>
              <p> মোট বাজার খরচ = {props.totalMarketingCost}</p>
              <p> মিল রেট = {props.milRate}</p>
            </div>

            <div className="mill">
              <p> আপনার মিল = {props.totalMill}</p>

              <p> আপনার মোট খরচ = {props.totalMillCost}</p>
              {props.messOwe === 0 ? (
                <p> মেস পাবে = {props.messOwe}</p>
              ) : (
                <p> আপনি পাবেন = {props.messDabte}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleInfo;
