import './App.css';
import React,{useState} from "react";

function App() {
  const [title,setTitle]=useState(false);
  return(
    <>
      <button className="btn" onClick={()=>setTitle(!title)}>Hide/Show</button>{title}
      {title? " ":<h2>Welcome to React App</h2>}
    
    </>
  );
}

export default App;