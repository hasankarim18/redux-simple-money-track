import React from 'react'

const Header = () => {
  return (
    <header className="md:container md:mx-auto mb-4 bg-black text-amber-400 p-6">
      <h1 className="text-4xl text-center capitalize">
        Redux Tailwind <span className="text-rose-500"> Bank</span>
      </h1>
    </header>
  );
}

export default Header