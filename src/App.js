import React,{useState} from "react";
import "./style.css";

export default function App() {
  const[count, setCount] = useState(0);

  return (
    <div>
      <h1>Use Reducer</h1>
      <h2>{count}</h2>
      <div className="">
        <button onClick={()=>setCount(count + 1)}>Inc</button>
        <button onClick={()=>setCount(count - 1)}>Dec</button>
        </div>
    </div>
  );
}
