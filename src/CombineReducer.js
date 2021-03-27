import React from "react";
import { connect } from "react-redux";
import App from './App';
class CombineReducer extends React.Component {
  render() {
    return (
      <>
        <div>
           <hr/>
          <div>A:{this.props.a}</div>
          <button onClick={()=>this.props.updateA(this.props.b)}> Update A</button>
          <hr/>
        </div>
        <div>
        <hr/>
          <div>B:{this.props.b}</div>
          <button onClick={()=>this.props.updateB(this.props.a)}> Update B</button>
          <hr/>
        </div>
        <br/><br/>
        <App/>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    a: state.reducerA.a,
    b: state.reducerB.b
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateA: b => dispatch({ type: "UPDATE_A", b }),
    updateB: a => dispatch({ type: "UPDATE_B", a })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CombineReducer);
