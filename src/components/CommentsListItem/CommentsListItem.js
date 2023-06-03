import React from 'react';

function CommentsListItem(props) {
    return (
        <div className="card-body">
            <h5 className="card-title"> {props.comment.email}</h5>
            <p className="card-text">{props.comment.body}</p>
        </div>
    );
}

export default CommentsListItem;