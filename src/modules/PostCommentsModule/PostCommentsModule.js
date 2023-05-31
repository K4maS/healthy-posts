import React from 'react';

function PostCommentsModule(props) {
    return (
        <div className="card mb-3" style={{ maxWidth: '100%' }}>

            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Комментарии</h5>
                        <h6 className="card-title">email</h6>
                        <p className="card-text">body</p>
                        <p className="card-text"><small className="text-body-secondary">id: </small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCommentsModule;