import { useDispatch, useSelector } from "react-redux";
import React from "react";
import PostsListItem from "../../components/PostsListItem/PostsListItem";
import { getPosts, getUsers, updatePageLoaded } from "../../store/toolkitSllice";
import Pagination from "../../components/Pagination/Pagination";
import './PostsListPage.scss';


function PostsListPage() {
    const dispath = useDispatch();
    const postsFiltered = useSelector((state) => state.toolkit.postsFiltered);
    const postsPaged = useSelector((state) => state.toolkit.postsPaged);
    const users = useSelector((state) => state.toolkit.users)
    const pageLoaded = useSelector((state) => state.toolkit.pageLoaded)
    const currentPage = useSelector((state) => state.toolkit.currentPage)
    const userById = (userId) => {
        return users.find((user) => user.id === userId)
    }

    return (


        < section className='posts' >

            <div className='container'>

                <h1 className="posts__title">Посты</h1>

                {postsFiltered.length > 0 ?
                    <div className="posts__block">
                        {postsPaged[currentPage].data.map((post) => <PostsListItem user={userById(post.userId)} post={post} key={post.id} />)}
                    </div>
                    :
                    <div className="posts__block">
                        {pageLoaded === false ?
                            <div>
                                <h2>Посты не найдены</h2>
                                <button className="btn btn-primary" onClick={() => dispath(getPosts())}>Обновить посты</button>
                            </div>
                            :
                            <div>
                                <h2>Загрузка постов... Спиннер крутится</h2>
                            </div>
                        }
                    </div>

                }
                <Pagination />
            </div>
        </section >


    );
}

export default PostsListPage;
