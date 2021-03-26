import React from "react";
import "./style.css";
import {connect} from "react-redux";

class App extends React.Component {
  render() {
    return (
      <>
        <div> {this.props.age}</div>
        <button onClick={this.props.ageUp}>Age Up</button>
        <button onClick={this.props.ageDown}>Age Down</button>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    age: state.age
  };
}

function mapDisplatchToProps(dispatch) {
  return {
    ageUp: () => {
      dispatch({ type: "AGE_UP" });
    },
    ageDown: () => {
      dispatch({ type: "AGE_DOWN" });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDisplatchToProps
)(App);
