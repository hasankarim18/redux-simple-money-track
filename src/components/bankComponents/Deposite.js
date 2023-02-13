import React from 'react'
import { useSelector } from 'react-redux';

const Deposite = () => {
  const {deposite} =   useSelector(state => state.bank)



  return (
    <div className="bg-green-400 p-8 sm:rounded-md ">
      <h4 className="text-2xl">Deposite</h4>
      <h2 className="text-4xl font-medium">
        $
        <span className="text-indigo-100" id="deposite_total">
          {deposite}
        </span>
        /-
      </h2>
    </div>
  );
}

export default Deposite