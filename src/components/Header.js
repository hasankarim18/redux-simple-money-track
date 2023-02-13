import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { auth } from '../redux/actions';

const Header = () => {
 const dispatch = useDispatch()

  const { isLoggedIn } = useSelector((state) => state.user);
 
const logoutAction = ()=> {
  dispatch(auth(false))
}


  return (
    <header className="md:container md:mx-auto mb-4 bg-black text-amber-400 p-6 flex items-center justify-between ">
      <h1 className="text-4xl text-left capitalize">
        Redux Tailwind <span className="text-rose-500"> Bank</span>
      </h1>
      <div className="pt-2">
        {isLoggedIn ? (
          <>
            <NavLink to="/" className="ml-4 ">
              Home
            </NavLink>
            <button onClick={logoutAction} className="py-2 px-6 bg-rose-500 text-white ml-6 rounded-md hover:bg-rose-600">
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" className="ml-4 ">
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
}

export default Header