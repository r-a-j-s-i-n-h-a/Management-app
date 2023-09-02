import React from 'react';
import './App.css';
import Alltask from "./components/layout/dasebord/Alltask";
import { Routes, Route, BrowserRouter,  } from "react-router-dom";
import Error_404 from "./components/404/Error_404";
import Login from "./components/acount/Login";
import Register from "./components/acount/Register";
import Assigntask from './components/layout/dasebord/AssignTask';






function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       
          <Route exact path="/main" element={<Alltask />} />
          <Route exact path="/tasks" element={<Alltask />} />
          <Route exact path="/assign-task" component={Assigntask} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route component={Error_404} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
