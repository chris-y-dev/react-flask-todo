import React from 'react';

function Form({userInput, onFormChange, onFormSubmit}){

    function handleChange(event){
        onFormChange(event.target.value);
    }

    function handleSubmit(event){
        onFormSubmit()
        event.preventDefault();
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" required value={userInput} onChange={handleChange}/>
            <input type="submit" />
        </form>
    )
}

export default Form