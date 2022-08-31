import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar'; 
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import About from './Components/About';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
    <>
    <Router>
      <Navbar title="Text Manipulator" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
          <Route exact path="/" element={<Textform heading="Enter the text to Manipulate" mode={mode} showAlert={showAlert}/>} />
          <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
