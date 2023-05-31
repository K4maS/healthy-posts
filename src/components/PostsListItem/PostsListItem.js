import { useDispatch, useSelector } from 'react-redux';
import avatar from './avatar.jpg';
import React from 'react';
import PostCommentsModule from '../../modules/PostCommentsModule/PostCommentsModule';
import { Link } from 'react-router-dom';
import { addCommentsForPost } from '../../store/toolkitSllice';

function PostsListItem(props) {
    const dispath = useDispatch();
    const posts = useSelector((state) => state.toolkit.posts);
    const addComments = (id) => {
        const getELem = posts.filter((elem) => elem.id === id);
        const index = posts.indexOf(getELem[0]);
        console.log('index: ', index)
        dispath(addCommentsForPost({ id, index }))
        return { id, index };
    }
    return (
        <div className="card mb-3" style={{ maxWidth: '100%' }}>
            <div className="row g-0">
                <div className="col-md-3">
                    <Link to={`/user/${props.post.id}`}>
                        <img src={avatar} className="img-fluid" alt="avatar"
                            style={{ maxWidth: '150px', borderRadius: '100%', padding: '16px' }} />
                    </Link>

                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.post.title}</h5>
                        <p className="card-text">{props.post.body}</p>
                        <p className="card-text"><small className="text-body-secondary">Post#{props.post.id}</small></p>
                        {!posts.comments ?
                            <button className="btn btn-primary" onClick={() => addComments(props.post.id)}>
                                Показать комментарии
                            </button>
                            :
                            <button className="btn btn-primary" onClick={() => addComments(props.post.id)}>
                                Скрыть комментарии
                            </button>
                        }
                    </div>
                </div>
            </div>
            {posts.comments &&
                <div>
                    <PostCommentsModule />
                </div>
            }
        </div>
    );
}

export default PostsListItem;
