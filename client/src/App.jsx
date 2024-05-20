import React from 'react';
import './App.css';

function Input(props) {
  return (
    <div className="Input">
      <input 
        type="text" 
        className="form-input" 
        placeholder=" " // Add a placeholder to ensure :not(:placeholder-shown) works
      />
      <label className="form-label">{props.text}</label>
    </div>
  );
}


function Checkbox(props) {
  return (
    <label className="checkbox-container">
      <input type="checkbox" />
      <span className="checkmark"></span>
      {props.label}
    </label>
  );
}


function Button(props) {
  return (
    <button className="button">
      <span>{props.text}</span>
    </button>
  );
}



function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1>Input</h1>
        <Input text="image_path" />
        <Checkbox label= "remove_background" />
        <Checkbox label= "export_video"/>
        <Checkbox label= "export_textmap"/>
        <Input text= "# sample_steps"/>
        <Input text= "# seed"/>
        <div className=''>
        <Button text="Reset"/>
        <Button text="Boot + Run"/>
        </div>
        
      </div>
      <div className='container'>
      <h1>Output</h1>
      </div>
  




    </div>
  );
}

export default App;

