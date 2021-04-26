import React from 'react'


export default function TodoList(props) {

    const { completeTodo, deleteTodo } = props
    let todoArray = props.todoArray.length > 0 ? props.todoArray : JSON.parse(localStorage.getItem("todos"))

    return (
        <div className="todo-list">
            <ul>
                {todoArray && todoArray.length > 0 ?
                todoArray.map((el, i) => (
                    <li key={i}>
                    <div className={el["done"] ? "line-through" : null}>{el.title}</div>
                    <div className="icon-Todo">
                    <i title="Complete" onClick = {() => completeTodo(i)} class={`fas fa-check-circle pointer ${el["done"] ? "green" : "gray"}`}></i>
                    <i title="Delete" onClick = {() => deleteTodo(i)} class="far fa-trash-alt pointer"></i>
                    </div>
                </li> 
                )) : null
                } 
            </ul>
        </div>
    )
}
