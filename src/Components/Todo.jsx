import React, { useState } from 'react'
import TodoList from './TodoList'
import Swal from 'sweetalert'
function Todo() {
    const [todo, setTodo] = useState({ title: "", done: false })
    const [todoArray, setTodoArray] = useState([])

    let todos = localStorage.hasOwnProperty("todos") ? JSON.parse(localStorage.getItem("todos")) : []

    const onChange = (e) => {
        let { value } = e.target
        let obj = {}
        obj["title"] = value
        obj["done"] = false
        setTodo(obj)
    }

    const createTodo = (e) => {
        const { name } = e.target
        if (e.key === "Enter" || name === "addTodo") {
            if (todo.title !== "") {
                todos.unshift(todo)
                localStorage.setItem('todos', JSON.stringify(todos))
                setTodo({ title: "", done: false })
            }
            else {
                alert("Add Task to perform")
            }
        }
    }

    const completeTodo = (i) => {
        if (todos[i]["done"] !== true) {
            todos[i]["done"] = true
            localStorage.setItem("todos", JSON.stringify(todos))
            setTodoArray(todos)
            alert("Task Completed")
        }
    }

    const deleteTodo = (i) => {
        Swal({
            title: "Are You sure?",
            text: "Once deleted, won't get back",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(res => {
            if (res) {
                todos.splice(i, 1)
                localStorage.setItem('todos', JSON.stringify(todos))
                setTodoArray(todos)
            }
        })
    }

    return (
        <>
            <div className="box">
                <div className="text-end">
                    <h1>TO DO LIST</h1>
                </div>
                <div className="text-addTodo">
                    <input type="text" name="todo" placeholder="Add task" value={todo.title} onKeyPress={createTodo} onChange={onChange} />
                    <button className="btn-addTodo" type="button" name="addTodo" onClick={createTodo}>Add</button>
                </div>
            </div>
            <TodoList todoArray={todoArray} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        </>
    )
}

export default Todo
