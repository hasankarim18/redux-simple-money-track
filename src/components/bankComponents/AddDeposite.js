import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { moneyAction } from "../../redux/actions";
import * as actionTypes from '../../redux/actionTypes'

const AddDeposite = () => {
  const dispatch = useDispatch()
 const inputRef  = useRef(0)
  const [inputError, setInputError] = useState(false);

  const deposite = (e)=> {
   const inputValue = parseFloat(inputRef.current.value);
   // console.log(inputValue);
    if (typeof inputValue === "number" && !isNaN(inputValue)){
       dispatch(moneyAction(inputValue, actionTypes.DEPOSITE));
       inputRef.current.value = "";
       setInputError(false)
    }else {
         setInputError(true);
    }   
  }

  return (
    <div className="bg-green-400 p-8 sm:rounded-md">
      <h4 className="text-4xl text-white mb-4">Deposite</h4>
      <div className="">
        <input
          ref={inputRef}
          id="deposite_field"
          type="number"
          className="outline-1 outline-green-400 min-w-full mb-4 p-2 bg-white text-black rounded-md"
          placeholder="Deposite amount"
        />
        <button
          onClick={deposite}
          id="deposite_button"
          className="font-semibold text-white rounded-md px-8 py-2 bg-rose-400 hover:bg-rose-500"
        >
          Deposite
        </button>
      </div>
      {inputError ? (
        <div className="p-4 text-white text-xl mt-4 rounded-md bg-red-400">
          Input must be number and can't be empty{" "}
        </div>
      ) : null}
    </div>
  );
}

export default AddDeposite