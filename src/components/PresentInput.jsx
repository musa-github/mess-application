import React, { Component } from "react";
import { db } from "../firebase";

export default class PresentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      one: this.props.mills.one,
      two: this.props.mills.two,
      three: this.props.mills.three,
      four: this.props.mills.four,
      five: this.props.mills.five,
      six: this.props.mills.six,
      seven: this.props.mills.seven,
      eight: this.props.mills.eight,
      nine: this.props.mills.nine,
      ten: this.props.mills.ten,
      eleven: this.props.mills.eleven,
      twolve: this.props.mills.twolve,
      thirteen: this.props.mills.thirteen,
      fourteen: this.props.mills.fourteen,
      fifteen: this.props.mills.fifteen,
      sixteen: this.props.mills.sixteen,
      seventeen: this.props.mills.seventeen,
      eightteen: this.props.mills.eightteen,
      ninteen: this.props.mills.ninteen,
      towenty: this.props.mills.towenty,
      towentyOne: this.props.mills.towentyOne,
      towentyTwo: this.props.mills.towentyTwo,
      towentyThree: this.props.mills.towentyThree,
      towentyFour: this.props.mills.towentyFour,
      towentyFive: this.props.mills.towentyFive,
      towentySix: this.props.mills.towentySix,
      towentySeven: this.props.mills.towentySeven,
      towentyEight: this.props.mills.towentyEight,
      towentyNine: this.props.mills.towentyNine,
      thirty: this.props.mills.thirty,
      thirtyOne: this.props.mills.thirtyOne,
    };
  }
  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value,
      });
    } else {
      this.setState({
        ...this.state,
        [e.target.name]: parseInt(e.target.value),
      });
    }
  };

  handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      await db
        .collection("memberInfo")
        .doc(this.props.id)
        .update({
          mills: {
            ...this.state,
            totalMill:
              this.state.one +
              this.state.two +
              this.state.three +
              this.state.four +
              this.state.five +
              this.state.six +
              this.state.seven +
              this.state.eight +
              this.state.nine +
              this.state.ten +
              this.state.eleven +
              this.state.twolve +
              this.state.thirteen +
              this.state.fourteen +
              this.state.fifteen +
              this.state.sixteen +
              this.state.seventeen +
              this.state.eightteen +
              this.state.ninteen +
              this.state.towenty +
              this.state.towentyOne +
              this.state.towentyTwo +
              this.state.towentyThree +
              this.state.towentyFour +
              this.state.towentyFive +
              this.state.towentySix +
              this.state.towentySeven +
              this.state.towentyEight +
              this.state.towentyNine +
              this.state.thirty +
              this.state.thirtyOne,
          },
        });
    }
  };
  render() {
    const { sl, name, desig } = this.props;
    console.log("this value from props", this.props.one);
    return (
      <>
        <div className="row mt-1">
          <div className="col-md-2">
            <div className="present_name_container_value">
              <input type="text" readOnly value={sl} />
              <input type="text" readOnly value={name} />
              <input type="text" readOnly value={desig} />
            </div>
          </div>
          <div className="col-md-2">
            <div className="present_Week_container_value">
              <input
                type="number"
                name="one"
                value={this.props.mills.one}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="two"
                value={this.props.mills.two}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="three"
                value={this.props.mills.three}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="four"
                value={this.props.mills.four}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="five"
                value={this.props.mills.five}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="six"
                value={this.props.mills.six}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="seven"
                value={this.props.mills.seven}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
            </div>
          </div>

          <div className="col-md-2">
            <div className="present_Week_container_value">
              <input
                type="number"
                name="eight"
                value={this.props.mills.eight}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="nine"
                value={this.props.mills.nine}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="ten"
                value={this.props.mills.ten}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="eleven"
                value={this.props.mills.eleven}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="twolve"
                value={this.props.mills.twolve}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="thirteen"
                value={this.props.mills.thirteen}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="fourteen"
                value={this.props.mills.fourteen}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="present_Week_container_value">
              <input
                type="number"
                name="fifteen"
                value={this.props.mills.fifteen}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="sixteen"
                value={this.props.mills.sixteen}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="seventeen"
                value={this.props.mills.seventeen}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="eightteen"
                value={this.props.mills.eightteen}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="ninteen"
                value={this.props.mills.ninteen}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="towenty"
                value={this.props.mills.towenty}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="towentyOne"
                value={this.props.mills.towentyOne}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="present_Week_container_value">
              <input
                type="number"
                name="towentyTwo"
                value={this.props.mills.towentyTwo}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="towentyThree"
                value={this.props.mills.towentyThree}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="towentyFour"
                value={this.props.mills.towentyFour}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="towentyFive"
                value={this.props.mills.towentyFive}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="towentySix"
                value={this.props.mills.towentySix}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="towentySeven"
                value={this.props.mills.towentySeven}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="towentyEight"
                value={this.props.mills.towentyEight}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="towentyNine"
                value={this.props.mills.towentyNine}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="thirty"
                value={this.props.mills.thirty}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="thirtyOne"
                value={this.props.mills.thirtyOne}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
            </div>
          </div>
          <div className="col-md-1">
            <div className="present_Week_container_value">
              <input type="text" value="Total" />
              <input
                type="number"
                name="total"
                value={this.props.totalMill}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
