import React, { Component } from "react";
import AdminForm from "../components/AdminForm";
import AdminHeading from "../components/AdminHeading";
import Title from "../components/Title";
import { Store } from "../context";
export default class Admin extends Component {
  static contextType = Store;

  // Add new member

  render() {
    let { memberInfo } = this.context;

    return (
      <>
        <Title title="Mess Account Ror The Month Of June" />

        <AdminHeading />
        {memberInfo.map((item) => {
          return (
            <AdminForm
              key={item.id}
              sl={item.memberInfo.sl}
              name={item.memberInfo.name}
              desig={item.memberInfo.desig}
              cashDiposit={item.memberInfo.cashDiposit}
              perviousDiposited={item.memberInfo.perviousDiposited}
              previousOwe={item.memberInfo.previousOwe}
              currentDiposit={item.memberInfo.currentDiposit}
              totalMarketingCost={item.memberInfo.totalMarketingCost}
              messDabte={item.memberInfo.messDabte}
              messOwe={item.memberInfo.messOwe}
              totalMill={item.memberInfo.totalMill}
              milRate={item.memberInfo.milRate}
              totalMillCost={item.memberInfo.totalMillCost}
              totalMembersMill={item.memberInfo.totalMembersMill}
              id={item.id}
            />
          );
        })}
      </>
    );
  }
}
