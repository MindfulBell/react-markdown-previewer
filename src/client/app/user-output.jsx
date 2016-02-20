import React from 'react';
require("!style!css!sass!../public/css/style.scss");
import Marked from 'marked';
const marked = require('marked')

const UserOutput = (props) => {
    const markify = () => {
        const rawMarkup = marked(props.input.toString(), {sanitize: true});
        return { __html: rawMarkup };
    }
    return (
    <div className='outputWrapper'>
        <h1>Output</h1>
        <div id='outputBox'>
            <span dangerouslySetInnerHTML={markify()} />
        </div>
    </div>
    );
    
};

export default UserOutput;
