import { useState } from "react";
import List from "./components/List"
import "./App.css";
import task from "./assets/task.png"


function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function addItem(event){
    const newItem = event.target.value;
    setInputText(newItem);
  }

  function saveItem(){
    setItems(prevItems =>{
      return [...prevItems, inputText];
    })
    setInputText("");
  }

  function deleteItem(id){
    setItems(prevItems =>{
      return prevItems.filter((items, index)=>{
        return index !== id;
      })
    })
  }

return <div className="container">
  <div className="header">
  <img src={task} alt="task" />
    <h1>To-Do List</h1>
  </div>
  <div className="form">
    <input onChange={addItem} type="text" value={inputText} />
    <button onClick={saveItem}>
    <span>Add</span>
    </button>
  </div>
  <ul>
    {items.map((toDoItem,index)=>{
      return <List
        key={index}
        id={index}
        text={toDoItem}
        onChecked={deleteItem}
      />
    })}
  </ul>
</div>
}

export default App;
