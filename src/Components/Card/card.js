import React from 'react';
import {Link} from 'react-router-dom';

function Card({listOfTodos}){
    return (
    <div>
        {listOfTodos.map(todo => {
            return (
            <ul key={todo.id}>
                <li key={todo.id}>
                <Link to={`${todo.id}`}>{todo.content}</Link>
                </li>
            </ul>
            )
        })}
    </div>
    )
} 

export default Card