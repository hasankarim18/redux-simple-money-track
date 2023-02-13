import * as at from './actionTypes'


export const moneyAction = (amount, actionType)=> {
    return {
        type:actionType,
        payload:amount
    }
}


export const auth = (status)=> {
    return {
      type: at.LOGIN,
      payload: status,
    };
}

