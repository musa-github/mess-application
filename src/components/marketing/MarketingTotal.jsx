import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../context";
import useSum from "../customComponent/useSum";

export default function MarketingTotal() {
  const { marketing } = useContext(Store);
  const [taka, setTaka] = useState([]);

  useEffect(() => {
    const value = marketing.map((item) => {
      return item.marketing.taka;
    });
    setTaka(value);
  }, [marketing]);

  return (
    <div className="marketing__total">
      <span>Total :</span>
      <span> {useSum(taka)}</span>
    </div>
  );
}
