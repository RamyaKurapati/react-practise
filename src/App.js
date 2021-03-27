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
        <div>
           {this.props.history.map((value,index)=>{
             return <div style={{border: '1px solid green',margin:'5px', textAlign:'center'}} key={value.id}
             onClick={()=>{this.props.deleteItem(value.id)}}>{value.age}</div>
           })

           }
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    age: state.age,
    history: state.history,
  };
}

function mapDisplatchToProps(dispatch) {
  return {
    ageUp: () => {
      dispatch({ type: "AGE_UP" });
    },
    ageDown: () => {
      dispatch({ type: "AGE_DOWN" });
    },
    deleteItem : (key) => {
      dispatch({type:'DELETE_ITEM', key:key})
    }
  };
}

export default connect(
  mapStateToProps,
  mapDisplatchToProps
)(App);
