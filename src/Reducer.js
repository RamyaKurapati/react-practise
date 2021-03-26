const intialState = {
  age:21,
}
 const ageReducer = (state=intialState,action) =>{
  switch(action.type){
    case 'AGE_UP':
        return {age:state.age+1}
    case 'AGE_DOWN':
        return {age:state.age-1}
    default :
      return state
  }
}
export default ageReducer;