import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import Delete from '../Components/Delete/delete';

function Show(){
    const [todo, setTodo] = useState([])
    const { id } = useParams()

    useEffect(()=>{
        fetch(`/api/${id}`).then(response => response.json())
        .then(data => setTodo(data))
    }, [id]) //[id] means if ID changes -> make a new request

    return (
        <div>
            {todo.length > 0 && todo.map(data => <div key={data.id}>{data.content}</div>)}
            <Delete id={id}/>
            <hr></hr>
            <Link to='/'>Back to todos</Link>
        </div>
    )
}

export default Show