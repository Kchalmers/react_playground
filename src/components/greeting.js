import React from 'react';
import './greeting.css'

const Greeting = (props) => {
    const styles = {
        color: props.color || 'deeppink'
    };

    return (
        <div className="greeting-font">
            <h2 style={styles}>Hello, {props.name}</h2>
        </div>
    )
};

export default Greeting;