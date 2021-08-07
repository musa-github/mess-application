import React, { useContext } from "react";
import PresentInput from "../components/PresentInput";
import PresentTitle from "../components/PresentTitle";
import { Store } from "../context";
import Loading from "./Loading";
export default function Present() {
  const { loading, memberInfo } = useContext(Store);

  const member = memberInfo.map((item) => {
    console.log(item.memberInfo.totalMill);
    return (
      <PresentInput
        key={item.id}
        id={item.id}
        sl={item.memberInfo.sl}
        name={item.memberInfo.name}
        desig={item.memberInfo.desig}
        mills={item.memberInfo.mills}
        totalMill={item.memberInfo.mills.totalMill}
      />
    );
  });
  return (
    <>
      <PresentTitle />

      {loading ? <Loading /> : member}
    </>
  );
}
