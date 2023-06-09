import React from 'react';
import CommentsListItem from '../../components/CommentsListItem/CommentsListItem';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner/Spinner';


function PostCommentsModule(props) {
    const comments = useSelector(state => state.toolkit.comments);
    const commentsLoaded = useSelector(state => state.toolkit.commentsLoaded);
    const currentComments = comments.filter((elem) => elem.postId === props.id);
    return (

        <div className="card mb-3 mx-3" style={{ maxWidth: '100%' }}>
            {currentComments.length > 0 ?
                <div className="row g-0">
                    <div className="">
                        {
                            currentComments.map((comment) => <CommentsListItem comment={comment} key={comment.id} />)
                        }

                    </div>
                </div>
                :
                <div className="row g-0">
                    {commentsLoaded ?
                        <h4 className="card-title">Нет комментариев</h4>
                        :
                        <Spinner />
                    }

                </div>
            }

        </div>
    );
}

export default PostCommentsModule;