import React from 'react'

const AddWithdraw = () => {
  return (
    <div className="bg-red-400 p-8 sm:rounded-md">
      <h4 className="text-4xl text-white mb-4">Withdraw</h4>
      <div className="">
        <input
          id="withdraw_field"
          type="number"
          className="outline-1
                     outline-red-400 min-w-full mb-4 p-2 bg-white text-black rounded-md"
          placeholder="Deposite amount"
        />
        <button
          id="withdraw_button"
          className="font-semibold text-white  rounded-md px-8 py-2 bg-green-400 hover:bg-green-500"
        >
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default AddWithdraw