import React from "react";

function SingleInfo(props) {
  return (
    <div className="grid_container mt-2">
      <div className="purticuler">
        <span>Purticuler</span>
        {/* title */}
        <p> Cash Diposited</p>
        <p>- Previous Owe</p>
        <p>+ Previous dabte</p>
      </div>

      <div className="taka">
        <span>Taka</span>
        <p>{props.cashDiposit}</p>
        <p>{props.previousOwe}</p>
        <span>{props.perviousDiposited}</span>
      </div>

      <div className="current__taka">
        <span>Cash</span>
        <p>0</p>
        <p>0</p>
        <span> {props.currentDiposit}</span>
      </div>

      <div className="total__mill">
        <span>TotalMill</span>
        <p className="mt-5">{props.totalMill}</p>
      </div>
      <div className="all__Mills">
        <span> AllMills</span>
        <p className="mt-5">{props.totalMembersMill}</p>
      </div>
      <div className="marketing__cost">
        <span> marketingCost</span>
        <p className="mt-5">{props.totalMarketingCost}</p>
      </div>
      <div className="mill__rate">
        <span> MillRate</span>
        <p className="mt-5">{props.milRate}</p>
      </div>

      <div className="total__mill__cost">
        <span> MillCost</span>
        <p className="mt-5">{props.totalMillCost}</p>
      </div>
    </div>
  );
}

export default SingleInfo;
