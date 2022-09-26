import {useState} from "react";
import Todo from "../todo/Todo";

export default function Todos() {
    let [todos, setTodos] = useState([]);
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(value => value.json())
        .then(value => {
            setTodos(value);
        });
    return(
        <div>
            {todos.map((todo) => (<Todo item={todo} key={todo.id}/>))}
        </div>
    )
}