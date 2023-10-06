import React, { useState } from "react";

function Register() {
    const [userName, setuserName] = useState(""); 
    const[surname,setsurname] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [rememberMe, setRememberMe] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("UserName:", userName, "surname:", surname, "Email:", email, "Password:", password, "Remember Me:", rememberMe);
       
    };

    return (
        <div className="register">
            <form className="register-form" onSubmit={handleSubmit}>

                <h2>Register</h2>
                <label htmlFor="name">Name</label>
                <input
                    type="userName"
                    placeholder="Enter your userName"
                    name="userName"
                    className="form-control" 
                    id="userName"
                    value={userName}
                    onChange={(e) => setuserName(e.target.value)}
                />
<br />
               <label htmlFor="surname">Surname</label>
                <input
                    type="surname"
                    placeholder="Enter your Surname"
                    name="surname"
                    className="form-control" 
                    id="surname"
                    value={surname}
                    onChange={(e) => setsurname(e.target.value)}
                />
<br />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Enter your Email"
                    name="email"
                    className="form-control" 
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Enter your Password"
                    name="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br />
                
                <label htmlFor="rememberMe">Remember me</label>
                <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                />
                <br />
                <button type="submit" className="btn btn-outline-primary" onClick={handleSubmit}>Register</button>
            </form>
        </div>
    );
}



export default Register;