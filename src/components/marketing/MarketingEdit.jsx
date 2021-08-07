import React, { Component } from "react";
import { db } from "../../firebase";
export class MarketingEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sl: null,
      date: null,
      taka: null,
      loading: false,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      this.setState({ loading: true });
      await db
        .collection("marketing")
        .doc(this.props.id)
        .update({
          ...this.state,
          sl: this.state.sl,
          date: this.state.date,
          taka: this.state.taka,
        });
      console.log("sucess!");
    } catch {
      console.log("some error");
      this.setState({ loading: false });
    }
  };
  handleChange = (e) => {
    if (e.target.name === "taka") {
      this.setState({
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="marketing__input__form">
        <input
          type="text"
          name="sl"
          className="sl"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="date"
          className="date"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="taka"
          className="taka"
          onChange={this.handleChange}
        />
        <button disabled={this.state.loading} type="submit">
          Update
        </button>
        <button onClick={this.props.handleEdit} type="submit">
          cencel
        </button>
      </form>
    );
  }
}

export default MarketingEdit;
