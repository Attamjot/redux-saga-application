import React from 'react';
import "./Button.css";

const Button = ({children, loading, ...props}) => (
    <button className="button" disabled={loading} {...props}>
        {loading ? "Loading... " : children}
    </button>
);

export default Button;