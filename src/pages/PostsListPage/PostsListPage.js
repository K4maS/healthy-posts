import { useDispatch, useSelector } from "react-redux";
import React from "react";
import PostsListItem from "../../components/PostsListItem/PostsListItem";
import { getPosts, getUsers, updatePageLoaded } from "../../store/toolkitSllice";



function PostsListPage() {
    const dispath = useDispatch();
    const posts = useSelector((state) => state.toolkit.posts)
    const users = useSelector((state) => state.toolkit.users)
    const pageLoaded = useSelector((state) => state.toolkit.pageLoaded)
    const userById = (userId) => {
        return users.find((user) => user.id === userId)
    }
    // Список постов будет загружаться при обновлении страницы 
    if (!pageLoaded) {
        dispath(getPosts())
        dispath(getUsers())
        dispath(updatePageLoaded(true))
    }
    return (

        < section className='posts' >

            <div className='container'>

                <h1 className="posts__title">Посты</h1>
                {posts.length > 0 ?
                    <div className="posts__block">
                        {posts.map((post) => <PostsListItem user={userById(post.userId) } post={post} key={post.id} />)}
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
            </div>
        </section >
    );
}

export default PostsListPage;
