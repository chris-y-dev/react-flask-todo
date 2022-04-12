import React from 'react';
import { useNavigate } from 'react-router-dom';

function Delete({id}){
    const navigate = useNavigate();
    function deleteTodo(){
        fetch(`/api/${id}`, {
            method: 'POST',
            body: JSON.stringify({
                id: id
            })
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            navigate('/')
        })
    }

    return (
        <button onClick={deleteTodo} id={id}>Delete</button>
    )
}

export default Delete