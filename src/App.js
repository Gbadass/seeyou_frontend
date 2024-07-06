import logo from './logo.svg';
import './App.css';
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
            <BrowserRouter>
                  <Routes>
                  <Route path="/signup" element={<SignUp/>}/>
                  <Route path="/login" element={<Login/>}/>
                          </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
