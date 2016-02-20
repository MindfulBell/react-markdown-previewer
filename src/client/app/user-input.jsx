import React from 'react';
require("!style!css!sass!../public/css/style.scss");

const UserInput = (props) => {
    return (
        <div className='inputWrapper'>
        <h1>Input</h1>
            <textarea id='inputBox' type='text' name='userMarkdown' max-width='350px'
            onInput={(event) => props.onInputChange(event.target.value)}>
            </textarea>
        </div>
    );
};

export default UserInput;

