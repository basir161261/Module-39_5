import React from 'react';
import { useHistory } from 'react-router';

const Posts = (props) => {
    const {id, title,body} = props.post;
    const history = useHistory();
    const showComment = (id) =>{
        const url = `post/${id}`;
        history.push(url)
    }
    return (
        <div>
            <h3> <strong>Id: {id}</strong> Title: {title}</h3>
            <p>{body}</p>
            <button onClick={() => showComment (id) } >Show Detail</button>

        </div>
    );
};

export default Posts;