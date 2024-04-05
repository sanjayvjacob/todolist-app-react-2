import {useState} from "react";

function List(props){
  const [isDone, setisDone] = useState("");

  function strikethrough(){
    setisDone(!isDone);
  }

  return <div 
  onDoubleClick={()=>{
    return props.onChecked(props.id);
  }}
  onClick={strikethrough}>
  <li style={{textDecoration: isDone ? "line-through" : "none"}}>{props.text}</li>
  </div>
}

export default List;