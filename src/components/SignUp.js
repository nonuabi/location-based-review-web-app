import React from 'react';

const SignUp = () => {
  return (
    <div className="sigup">
      <div className="container">
        <form action="/signup" method="POST">
          <p>Name</p>
          <input type="text" placeholder="Enter Name"></input>
          <p>Email</p>
          <input type="email" placeholder="Enter Email"></input>
          <p>Password</p>
          <input type="text" placeholder="Enter Password"></input>
          <p>Confirm Password</p>
          <input type="text" placeholder="Enter Confirm Password"></input>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
