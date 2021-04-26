import React, { useState } from 'react'
import TodoList from './TodoList'
import swal from 'sweetalert';

export default function CreateTodo() {

    const [todo, setTodo] = useState({title: "", done: false})
    const [todoArray, setTodoArray] = useState([])

    let todos = localStorage.hasOwnProperty("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : []

    const onChange = (event) => {
        let {value} = event.target
        let obj = {}
        obj ["title"] = value
        obj ["done"] = false
        setTodo(obj)
    };

    const createTodo = (event) => {
        const {name} = event.target
        if(event.key === "Enter" || name === "addTodo"){
            if(todo.title !== ""){
                todos.unshift(todo)
                localStorage.setItem('todos', JSON.stringify(todos))
                setTodo( {title: "", done: false})
            }else{
                swal("Oops!", "Please write todo first!", "error");

            }
        }
    }

    const completeTodo = (i) => {
        if(todos[i]["done"] !== true){
            todos[i]["done"] = true
            localStorage.setItem('todos', JSON.stringify(todos))
                localStorage.setItem('todos', JSON.stringify(todos))
            setTodo(todos)
            swal("Good Job!", "Todo Completed", "success");

        }
    }

    const deleteTodo = (i) => {
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(res => {
            if(res){
                todos.splice(i, 1)
                localStorage.setItem('todos', JSON.stringify(todos))
                setTodoArray(todos)
            }
        })
    }

    return (
        <>
            <div className="box">
                <div className="text">
                    <h1>React Todo App</h1>
                    {/* <h2>Add Todo Tasts</h2> */}
                    <div className="text-addTodo">
                        <input className="type-Todo" type="text" name="todo" placeholder="Enter here..." value = {todo.title} onKeyPress = { createTodo} onChange = {onChange}/>
                        <button className="btn-addTodo" type="button" name="addTodo" onClick={createTodo}>Add Todo</button>

                    </div>
                </div>
            </div>
            <TodoList todoArray={todoArray} 
            completeTodo = {completeTodo}
            deleteTodo= {deleteTodo} />
        </>
    )
}
