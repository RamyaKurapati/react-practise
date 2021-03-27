const intialState = {
  age:21,
  history: [],
}
 const ageReducer = (state=intialState,action) =>{
  switch(action.type){
    case 'AGE_UP':
        return {...state, 
        age:state.age+1,
        history:state.history.concat({age : state.age+1, id: Math.random()})}
    case 'AGE_DOWN':
        return {...state, age:state.age-1,
         history:state.history.concat({age : state.age-1, id: Math.random()})}
    case 'DELETE_ITEM' : {
      return {...state,
      history: state.history.filter(element => element.id !== action.key)}
    }
    default :
      return state
  }
}
export default ageReducer;