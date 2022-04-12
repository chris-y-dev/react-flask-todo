import React, {useState, useEffect} from 'react';
import Card from '../Components/Card/card';
import Form from '../Components/Form/form';

function TodoPage(){
    const [todo, setTodo] = useState([]);
    const [addTodo, setAddTodo] = useState(''); //State to track what is typed into input

    useEffect(() => {
        fetch('/api').then(response => {
            if (response.ok){
                return response.json()
            }
        }).then(data => setTodo(data))
    }, [])

    function handleFormChange(inputValue){
        setAddTodo(inputValue)
        console.log(addTodo);
    }

    function handleFormSubmit(){
        fetch('/api/create', {
            method: 'POST',
            body: JSON.stringify({
                content: addTodo
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
        .then(message => {
            console.log(message)
            setAddTodo('')
            getLatestTodos()
        }), [] //THIS IS CORRECT? ATTEMPT TO STOP LOOP
    }

    function getLatestTodos(){
        fetch('/api').then(response => {
            if (response.ok){
                return response.json()
            }
        }).then(data => setTodo(data))
    }

    return (
        <div>
            <Form userInput={addTodo} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit} />
            <Card listOfTodos={todo} />
        </div>
    )
}

export default TodoPage