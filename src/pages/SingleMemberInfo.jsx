import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import SingleInfo from "../components/SingleInfo";
import { db } from "../firebase";
function SingleMemberInfo(props) {
  let [info, setInfo] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    db.collection("memberInfo")
      .doc(id)
      .onSnapshot(async (snapshot) => {
        await setInfo(snapshot.data());
      });
  });

  return (
    <SingleInfo
      cashDiposit={info.cashDiposit}
      perviousDiposited={info.perviousDiposited}
      previousOwe={info.previousOwe}
      currentDiposit={info.currentDiposit}
      totalMarketingCost={info.totalMarketingCost}
      messDabte={info.messDabte}
      messOwe={info.messOwe}
      totalMill={info.totalMill}
      milRate={info.milRate}
      totalMillCost={info.totalMillCost}
      totalMembersMill={info.totalMembersMill}
    />
  );
}

export default withRouter(SingleMemberInfo);
