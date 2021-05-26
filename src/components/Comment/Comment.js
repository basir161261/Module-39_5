import React from 'react';

const Comment = (props) => {
    const {name, email} = props.comment;
    return (
        <div>
            <h2>Comments Route.....!</h2>
            <p>{name}: {email}</p>
        </div>
    );
};

export default Comment;