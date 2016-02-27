import React from 'react';
require("!style!css!sass!../public/css/style.scss");

const UserInput = (props) => {
    return (
        <div className='inputWrapper'>
        <h1 className='title'>Input</h1>
            <textarea style={props.height} id='inputBox' type='text' name='userMarkdown' max-width='350p'
            onInput={(event) => props.onInputChange(event.target.value)}//event for inputting + resizing
            onMouseUp={(event) => props.onSizeChange(event.target.style.height)} >
                {props.startInput}
            </textarea>
        </div>
    );
};

export default UserInput;

