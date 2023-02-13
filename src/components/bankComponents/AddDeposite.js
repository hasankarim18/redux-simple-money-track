import React from 'react'

const AddDeposite = () => {
  return (
    <div className="bg-green-400 p-8 sm:rounded-md">
      <h4 className="text-4xl text-white mb-4">Deposite</h4>
      <div className="">
        <input
          id="deposite_field"
          type="number"
          className="outline-1 outline-green-400 min-w-full mb-4 p-2 bg-white text-black rounded-md"
          placeholder="Deposite amount"
        />
        <button
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