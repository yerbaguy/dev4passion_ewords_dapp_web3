import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
//import EWordssss from './EWordssss';
import EWordssss from './EWordssss';
//import EWords from './EWords';

function App() {

    const [data, setData] = useState([])

    useEffect(() => {
      setData(data)
    }, [])

  return (

    

    <div className="App">

      {/* <EWords /> */}
      <EWordssss /> 

      {/* <header className="App-header">
       
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
