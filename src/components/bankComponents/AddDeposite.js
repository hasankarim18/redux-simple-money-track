import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { moneyAction } from "../../redux/actions";
import * as actionTypes from '../../redux/actionTypes'

const AddDeposite = () => {
  const dispatch = useDispatch()
 const inputRef  = useRef(0)

  const deposite = (e)=> {
   const inputValue = inputRef.current.value 
   // console.log(inputValue);
  
   dispatch(moneyAction(inputValue, actionTypes.DEPOSITE));

   inputRef.current.value = ''


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
    </div>
  );
}

export default AddDeposite