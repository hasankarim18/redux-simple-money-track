import React from 'react'
import { useSelector } from 'react-redux';

const Withdraw = () => {
  const {withdraw} =  useSelector(state => state.bank)
  return (
    <div className="bg-red-400 p-8 sm:rounded-md ">
      <h4 className="text-2xl">Withdraw</h4>
      <h2 className="text-4xl font-medium">
        $
        <span className="text-gray-700" id="withdraw_total">
          {withdraw}
        </span>
        /-
      </h2>
    </div>
  );
}

export default Withdraw