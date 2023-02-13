import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {auth } from '../../redux/actions'


const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginClick = ()=> {
    dispatch(auth(true))
    navigate('/')
  }

  return (
    <div className="text-5xl md:container mx-auto">
      <button
        onClick={loginClick}
        className="text-3xl px-8 py-4 bg-green-500 rounded-md text-white font-semibold"
      >
        Login
      </button>
    </div>
  );
}

export default Login