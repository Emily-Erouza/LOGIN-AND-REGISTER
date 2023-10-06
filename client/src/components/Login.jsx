import React, { useState } from "react";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", Email, "Password:", Password);
    
  };

  
  return (
    <div className="card-login">
        
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          name="Email"
          class="form-control"
          id="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
      
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your Password"
          name="password"
          class="form-control"
          id="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
    
    <br />
 <button type="submit" className="btn btn-outline-primary" onClick={handleSubmit}>Login</button>        
      </form>
    </div>
  );
}

export default Login;