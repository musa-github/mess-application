import React, { useContext } from "react";
import MarketingDisplay from "../components/marketing/MarketingDisplay";
import MarketingInput from "../components/marketing/MarketingInput";
import MarketingTotal from "../components/marketing/MarketingTotal";
import { Store } from "../context";
import Loading from "./Loading";
export default function MarketingCost() {
  const { marketing, loading } = useContext(Store);

  const data = marketing.map((item, index) => {
    return (
      <>
        <MarketingDisplay
          index={index}
          date={item.marketing.date}
          id={item.id}
          taka={item.marketing.taka}
        />
      </>
    );
  });

  return (
    <div className="row marketing__row">
      <MarketingInput />
      <div className="col-md-8 marketing__Display mt-2">
        <div className="marketing__title">
          <span>sl</span>
          <span>Date</span>
          <span>Taka</span>
        </div>
        {loading ? <Loading /> : data}
        <MarketingTotal />
      </div>
    </div>
  );
}
