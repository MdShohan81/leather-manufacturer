import React from 'react';
import './Button.css'
const Button = ({children}) => {
    return (
        <div>
            <button className='primary-btn'>{children}</button>
        </div>
    );
};

export default Button;