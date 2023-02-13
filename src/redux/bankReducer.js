import * as at from './actionTypes'
const initialState = {
  balance: 1000,
  deposite: 0,
  withdraw: 0,
};

const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case at.DEPOSITE:
      const depositeAmount = parseFloat(action.payload)    
      return {
        ...state,
        deposite:state.deposite + depositeAmount,
        balance: state.balance + depositeAmount
      }
    case at.WITHDRAW:
      const withDrawAmount = parseFloat(action.payload);
      console.log(withDrawAmount);
      return {
        ...state, 
        withdraw:state.withdraw + withDrawAmount,
        balance: state.balance - withDrawAmount
      }
    default:
      return state;
  }
 
};


export default bankReducer;