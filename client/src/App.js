
import './App.css';
import Home from "./components/Home"
import Login from "./components/Login";
import Register from "./components/Register";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

 
  return (
    <div className="App">

      <Home />
      <div className='frontPage' >
        <Login />
        <Register />
      </div>


      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
