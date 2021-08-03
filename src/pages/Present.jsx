import React, { useContext } from "react";
import PresentInput from "../components/PresentInput";
import PresentTitle from "../components/PresentTitle";
import { Store } from "../context";
import Loading from "./Loading";
export default function Present() {
  const { loading, memberInfo } = useContext(Store);
  const member = memberInfo.map((item) => {
    return (
      <PresentInput
        key={item.id}
        id={item.id}
        sl={item.memberInfo.sl}
        name={item.memberInfo.name}
        desig={item.memberInfo.desig}
        one={item.memberInfo.mills.one}
        two={item.memberInfo.mills.two}
        three={item.memberInfo.mills.three}
        four={item.memberInfo.mills.four}
        five={item.memberInfo.mills.five}
        six={item.memberInfo.mills.six}
        seven={item.memberInfo.mills.seven}
        eight={item.memberInfo.mills.eight}
        nine={item.memberInfo.mills.nine}
        ten={item.memberInfo.mills.ten}
        eleven={item.memberInfo.mills.eleven}
        twolve={item.memberInfo.mills.twolve}
        thirteen={item.memberInfo.mills.thirteen}
        fourteen={item.memberInfo.mills.fourteen}
        fifteen={item.memberInfo.mills.fifteen}
        sixteen={item.memberInfo.mills.sixteen}
        seventeen={item.memberInfo.mills.seventeen}
        eightteen={item.memberInfo.mills.eightteen}
        ninteen={item.memberInfo.mills.ninteen}
        towenty={item.memberInfo.mills.towenty}
        towentyOne={item.memberInfo.mills.towentyOne}
        towentyTwo={item.memberInfo.mills.towentyTwo}
        towentyThree={item.memberInfo.mills.towentyThree}
        towentyFour={item.memberInfo.mills.towentyFour}
        towentyFive={item.memberInfo.mills.towentyFive}
        towentySix={item.memberInfo.mills.towentySix}
        towentySeven={item.memberInfo.mills.towentySeven}
        towentyEight={item.memberInfo.mills.towentyEight}
        towentyNine={item.memberInfo.mills.towentyNine}
        thirty={item.memberInfo.mills.thirty}
        thirtyOne={item.memberInfo.mills.thirtyOne}
        totalMill={item.memberInfo.totalMill}
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
