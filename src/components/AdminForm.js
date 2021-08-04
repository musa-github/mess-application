import React, { Component } from "react";
import { Store } from "../context";
import { db } from "../firebase";
export default class AdminForm extends Component {
static contextType= Store;
  constructor(props) {
    super(props);
    this.state = {
      sl:this.props.sl,
      name: this.props.name,
      desig: this.props.desig,
      cashDiposit: this.props.cashDiposit,
      perviousDiposited: this.props.perviousDiposited,
      previousOwe: this.props.previousOwe,
      currentDiposit: this.props.currentDiposit,
      totalMarketingCost: this.props.totalMarketingCost,
      messDabte: this.props.messDabte,
      messOwe: this.props.messOwe,
      totalMill: this.props.totalMill,
      milRate: this.props.milRate,
      totalMillCost: this.props.totalMillCost,
      totalMembersMill: this.props.totalMembersMill,
      id: this.props.id,
    };
  }

  handleChange = (e) => {
   
    this.setState(() => {
      if (e.target.type !== "text") {
        return {
          
          [e.target.name]: Number(e.target.value),
        };
       
      } else {
        return {
          ...this.state,
          [e.target.name]: e.target.value,
        };
      }
    });
  
  };
  handleKeyPress = async(e) => {
    const {totalMembersMill}=this.context;
    if (e.key === "Enter") {
     await db.collection("memberInfo")
        .doc(this.props.id)
        .update({
          
          [e.target.name]:
            e.target.type === "text" ? e.target.value : Number(e.target.value),
          currentDiposit:
            this.state.cashDiposit +
            this.state.perviousDiposited -
            this.state.previousOwe,
            totalMembersMill: totalMembersMill.reduce((accumutive, current) => {
              return accumutive + current;
            }, 0),
            messDabte:this.state.currentDiposit - this.state.totalMillCost,
            messOwe:this.state.totalMillCost - this.state.currentDiposit,
            milRate:this.state.totalMarketingCost /this.state.totalMembersMill,
            totalMillCost:this.state.milRate*this.state.totalMill,
            
        });
        
    }
  };
  render() {
    const {
      sl,
      name,
      desig,
      cashDiposit,
      perviousDiposited,
      previousOwe,
      currentDiposit,
      totalMarketingCost,
      messDabte,
      messOwe,
      totalMill,
      milRate,
      totalMillCost,
    } = this.state;
    console.log( sl,
      name,
      desig,
      cashDiposit,
      perviousDiposited,
      previousOwe,
      currentDiposit,
      totalMarketingCost,
      messDabte,
      messOwe,
      totalMill,
      milRate,
      totalMillCost
    )
   
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <table>
              <tr>
                <td>
                  <input
                    type="number"
                    name="sl"
                    value={sl}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                  />
                </td>
                <td>
                  <input
                    className="input_name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                  />
                </td>
                <td>
                  <input
                    className="input_desig"
                    type="text"
                    name="desig"
                    value={desig}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="cashDiposit"
                    value={cashDiposit}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                  />
                </td>
              </tr>
            </table>
          </div>
          <div className="col-md-4">
            <table>
              <tr>
                <td>
                  <input
                    type="number"
                    name="perviousDiposited"
                    value={perviousDiposited}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="previousOwe"
                    value={previousOwe}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="currentDiposit"
                    value={currentDiposit}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="totalMarketingCost"
                    value={totalMarketingCost}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                  />
                </td>
              </tr>
            </table>
          </div>
          <div className="col-md-4">
            <table>
              <tr>
                <td>
                  <input
                    type="number"
                    name="messDabte"
                    value={messDabte}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="messOwe"
                    value={messOwe}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="totalMill"
                    value={totalMill}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="milRate"
                    value={milRate}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="totalMillCost"
                    value={totalMillCost}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
