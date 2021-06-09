import React from 'react';

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <form action="/login" method="POST">
          <p>Email</p>
          <input type="email" placeholder="Enter Email id"></input>
          <p>Password</p>
          <input type="password" placeholder="Enter password"></input>
        </form>
      </div>
    </div>
  );
};

export default Login;
