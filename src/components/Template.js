import React from 'react';

const Template = ({children}) => {
    return (
        <div>
            <div>Today's To Do List (0)</div>
            <div>{children}</div>
        </div>
    );
};

export default Template;