import React from 'react'
import './App.css';
import ListTask from './components/ListTask';
import Task from './components/Task';



function App() {



  return (
    <div  style={{backgroundImage: 'linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.6)),url("/backg.jpg")'}} className="App">
      
      <Task />
      <ListTask />    
      
     
    </div>
  );
}

export default App;
