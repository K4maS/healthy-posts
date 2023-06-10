import React from 'react';
import CommentsListItem from '../../components/CommentsListItem/CommentsListItem';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner/Spinner';


function PostCommentsModule(props) {
    const comments = useSelector(state => state.toolkit.comments);
    const currentComments = comments.filter((elem) => elem.postId === props.id);
    const loadingProcess = useSelector((state) => state.toolkit.loadingProcess);
    const loadingError = useSelector((state) => state.toolkit.loadingError);
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
                    <div className="posts__block">
                        {loadingProcess &&
                            <Spinner />
                        }
                        {loadingError &&
                            <h1>Произошла ошибка</h1>
                        }
                    </div>
                </div>
            }

        </div>
    );
}

export default PostCommentsModule;