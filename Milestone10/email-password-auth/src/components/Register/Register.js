import React from 'react';

const Register = () => {
  // easy way
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  };

  // another way with react handler
  const handleEmailChange = (event) => {
    console.log(event.target.value);
  };
  const handlePasswordChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <form action="" onSubmit={handleRegister}>
        <input
          // onChange={handleEmailChange}
          onBlur={handleEmailChange}
          type="email"
          name="email"
          id=""
          placeholder="Email"
        />
        <br />
        <input
          // onChange={handlePasswordChange}
          onBlur={handlePasswordChange}
          type="password"
          name="password"
          id=""
          placeholder="Password"
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;