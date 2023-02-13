import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { moneyAction } from '../../redux/actions';
import * as actionTypes from "../../redux/actionTypes";

const AddWithdraw = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(0)
  const [inputError, setInputError] = useState(false);

  const withdraw = ()=> {
    const inputValue = parseFloat(inputRef.current.value);
  //  console.log( !isNaN(inputValue));

    if (typeof inputValue === "number" && !isNaN(inputValue)) {
      dispatch(moneyAction(inputValue, actionTypes.WITHDRAW));
      inputRef.current.value = "";
       setInputError(false);
    } else {
      // console.log(inputValue);
      setInputError(true);
    }
   

  }

  return (
    <div className="bg-red-400 p-8 sm:rounded-md">
      <h4 className="text-4xl text-white mb-4">Withdraw</h4>
      <div className="">
        <input
          ref={inputRef}
          id="withdraw_field"
          type="number"
          className="outline-1
                     outline-red-400 min-w-full mb-4 p-2 bg-white text-black rounded-md"
          placeholder="Deposite amount"
        />
        <button
          onClick={withdraw}
          id="withdraw_button"
          className="font-semibold text-white  rounded-md px-8 py-2 bg-green-400 hover:bg-green-500"
        >
          Withdraw
        </button>
      </div>
      {
        inputError ? <div className="p-4 text-white text-xl mt-4 rounded-md bg-green-400" >Input must be number and can't be empty </div>
        :null
      }
    </div>
  );
}

export default AddWithdraw