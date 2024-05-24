import React from 'react';
import {FileInput,Input,Checkbox,Button} from './Elements.jsx';

import './App.css';






function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1>Input</h1>
        <FileInput text="image_path" />
        <Checkbox label= "remove_background" />
        <Checkbox label= "export_video"/>
        <Checkbox label= "export_textmap"/>
        <Input text= "# sample_steps"/>
        <Input text= "# seed"/>
        <div className='button-container'>
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

