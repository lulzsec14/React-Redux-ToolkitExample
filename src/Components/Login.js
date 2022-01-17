import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../Features/user';

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: 'Sourav', age: 21, email: 'sourav@gmail.com' })
          );
        }}
      >
        Login
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
