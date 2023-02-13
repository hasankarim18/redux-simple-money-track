import React from 'react'
import { useSelector } from 'react-redux';

const Balance = () => {
 const {balance} = useSelector(state => state.bank)
  return (
    <div className="bg-blue-600 p-8 sm:rounded-md ">
      <h4 className="text-2xl">Balance</h4>
      <h2 className="text-4xl font-medium text-rose-300">
        $
        <span className="text-white" id="balance">
          {balance}
        </span>
        /-
      </h2>
    </div>
  );
}

export default Balance