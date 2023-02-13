import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-16 bg-black text-white text-2xl p-6 text-center">
      <h2 className="capitalize">
        All rights reserved &copy;{" "}
        <span className="text-amber-400">
          {" "}
          Redux Tailwind <span className="text-rose-400">bank</span>
        </span>{" "}
      </h2>
    </footer>
  );
}

export default Footer