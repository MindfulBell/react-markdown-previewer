import React from 'react';
require("!style!css!sass!../public/css/style.scss");

const UserInput = (props) => {
    return (
        <div className='inputWrapper'>
        <h1 className='title'>Input</h1>
            <textarea id='inputBox' type='text' name='userMarkdown' max-width='350p'
            onInput={(event) => props.onInputChange(event.target.value)}>
                {props.startInput}
            </textarea>
        </div>
    );
};

export default UserInput;

