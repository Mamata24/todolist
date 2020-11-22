import React from 'react'

export default function TodoList(props) {
    const { completeTodo, deleteTodo } = props
    let todoArray = props.todoArray.length > 0 ? props.todoArray : JSON.parse(localStorage.getItem('todos'))
    return (
        <div className="todo-list">
            <ul>
                {todoArray && todoArray.length > 0 ? todoArray.map((ele, i) => (
                    <li key={i}>
                        <div className={ele["done"] ? "line-through" : null}>{ele.title}</div>
                        <div className="icon">
                            <button title="Complete" onClick={() => completeTodo(i)} className={`fas fa-check-circle pointer done ${ele["done"] ? "green" : "blue"}`} >Done</button>
                            <button title="Delete" onClick={() => deleteTodo(i)} className="fas fa-trash-alt pointer delete">Delete</button>
                        </div>
                    </li>
                )) : null
                }
            </ul>
        </div>
    )
}

