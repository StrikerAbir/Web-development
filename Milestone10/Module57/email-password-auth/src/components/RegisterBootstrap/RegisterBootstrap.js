import React from "react";

const RegisterBootstrap = () => {

      const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email);
        console.log(password);
      };
  return (
    <div className="w-50 mx-auto">
      <h3 className="text-primary">Please Register using Bootstrap</h3>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name='email'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
                      id="exampleInputPassword1"
                      name='password'
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterBootstrap;
