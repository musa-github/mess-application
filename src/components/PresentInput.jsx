import React, { Component } from "react";
import { db } from "../firebase";

export default class PresentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      one: this.props.one,
      two: this.props.two,
      three: this.props.three,
      four: this.props.four,
      five: this.props.five,
      six: this.props.six,
      seven: this.props.seven,
      eight: this.props.eight,
      nine: this.props.nine,
      ten: this.props.ten,
      eleven: this.props.eleven,
      twolve: this.props.twolve,
      thirteen: this.props.thirteen,
      fourteen: this.props.fourteen,
      fifteen: this.props.fifteen,
      sixteen: this.props.sixteen,
      seventeen: this.props.seventeen,
      eightteen: this.props.eightteen,
      ninteen: this.props.ninteen,
      towenty: this.props.towenty,
      towentyOne: this.props.towentyOne,
      towentyTwo: this.props.towentyTwo,
      towentyThree: this.props.towentyThree,
      towentyFour: this.props.towentyFour,
      towentyFive: this.props.towentyFive,
      towentySix: this.props.towentySix,
      towentySeven: this.props.towentySeven,
      towentyEight: this.props.towentyEight,
      towentyNine: this.props.towentyNine,
      thirty: this.props.thirty,
      thirtyOne: this.props.thirtyOne,
    };
  }
  handleChange = (e) => {
    this.setState(() => {
      if (e.target.type !== "text") {
        return {
          ...this.state,
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

  handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      await db
        .collection("memberInfo")
        .doc(this.props.id)
        .update({
          mills: { ...this.state },
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
        });
    }
  };

  render() {
    const { sl, name, desig } = this.props;

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
                value={this.props.one}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="two"
                value={this.props.two}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="three"
                value={this.props.three}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="four"
                value={this.props.four}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="five"
                value={this.props.five}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="six"
                value={this.props.six}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="seven"
                value={this.props.seven}
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
                value={this.props.eight}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="nine"
                value={this.props.nine}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="ten"
                value={this.props.ten}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="eleven"
                value={this.props.eleven}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="twolve"
                value={this.props.twolve}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="thirteen"
                value={this.props.thirteen}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="fourteen"
                value={this.props.fourteen}
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
                value={this.props.fifteen}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="sixteen"
                value={this.props.sixteen}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="seventeen"
                value={this.props.seventeen}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="eightteen"
                value={this.props.eightteen}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="ninteen"
                value={this.props.ninteen}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="towenty"
                value={this.props.towenty}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="towentyOne"
                value={this.props.towentyOne}
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
                value={this.props.towentyTwo}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="towentyThree"
                value={this.props.towentyThree}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="towentyFour"
                value={this.props.towentyFour}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="towentyFive"
                value={this.props.towentyFive}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="towentySix"
                value={this.props.towentySix}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="towentySeven"
                value={this.props.towentySeven}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="towentyEight"
                value={this.props.towentyEight}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="towentyNine"
                value={this.props.towentyNine}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="thirty"
                value={this.props.thirty}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
              <input
                type="number"
                name="thirtyOne"
                value={this.props.thirtyOne}
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
