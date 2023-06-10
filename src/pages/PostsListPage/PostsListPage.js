import { useSelector } from "react-redux";
import React from "react";
import PostsListItem from "../../components/PostsListItem/PostsListItem";
import Pagination from "../../components/Pagination/Pagination";
import './PostsListPage.scss';
import Spinner from "../../modules/Spinner/Spinner";


function PostsListPage() {
    const postsPaged = useSelector((state) => state.toolkit.postsPaged);
    const users = useSelector((state) => state.toolkit.users);
    const currentPage = useSelector((state) => state.toolkit.currentPage);
    const loadingProcess = useSelector((state) => state.toolkit.loadingProcess);
    const loadingError = useSelector((state) => state.toolkit.loadingError);
    const userById = (userId) => {
        return users.find((user) => user.id === userId)
    }

    return (


        < section className='posts' >

            <div className='container'>

                <h1 className="posts__title">Посты</h1>

                {postsPaged.length > 0 ?
                    <div className="posts__block">
                        {postsPaged[currentPage].data.map((post) => <PostsListItem user={userById(post.userId)} post={post} key={post.id} />)}
                        <Pagination />
                    </div>
                    :
                    <div className="posts__block">
                        {loadingProcess &&
                            <Spinner />
                        }
                        {loadingError &&
                            <h1>Произошла ошибка</h1>
                        }
                    </div>

                }

            </div>
        </section >


    );
}

export default PostsListPage;
