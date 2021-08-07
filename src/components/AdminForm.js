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
      cashDiposit: "",
      perviousDiposited: "",
      previousOwe: "",
      currentDiposit: "",
      totalMarketingCost: "",
      messDabte: "",
      messOwe: "",
      totalMill: this.props.totalMill,
      milRate: "",
      totalMillCost: "",
      
     
    };
  }
  handleChange = (e) => {
    const {totalMembersMill,marketing}=this.context;
    const data = marketing.map(item=>{
      return item.marketing.taka
    })
    if(e.target.type=== "text"){
      this.setState({
        ...this.state,
        [e.target.name]:e.target.value
      })
    }else{
          this.setState({
            ...this.state,
          [e.target.name]:parseInt(e.target.value),
         currentDiposit:this.state.cashDiposit +this.state.perviousDiposited-this.state.previousOwe,
         messDabte:this.state.currentDiposit - this.state.totalMillCost,
         messOwe:this.state.totalMillCost - this.state.currentDiposit,
         totalMembersMill: totalMembersMill.reduce((accumutive, current) => {
          return accumutive + current;
         }, 0),
         totalMarketingCost:data.reduce((accumutive,current)=>{
          return accumutive + current
         },0),
         milRate:Math.round(this.state.totalMarketingCost /this.state.totalMembersMill),
         totalMillCost:this.state.milRate*this.state.totalMill,


      })
    }
  }
  handleKeyPress = async(e) => {
    
    if (e.key === "Enter") {
     await db.collection("memberInfo")
        .doc(this.props.id)
        .update({
          ...this.state,   
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
    } = this.props;
    
   
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
