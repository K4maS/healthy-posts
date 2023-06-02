import React from 'react';

function CommentsListItem(props) {
    return (
        <div className="card-body">
            <h5 className="card-title">{props.comment.name}</h5>
            <h6 className="card-title">email: {props.comment.email}</h6>
            <p className="card-text">comment: {props.comment.body}</p>
        </div>
    );
}

export default CommentsListItem;