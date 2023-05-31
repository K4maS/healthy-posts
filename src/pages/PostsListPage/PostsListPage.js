import { useDispatch, useSelector } from "react-redux";
import React from "react";
import PostsListItem from "../../components/PostsListItem/PostsListItem";
import { getPosts, updatePageLoaded } from "../../store/toolkitSllice";



function PostsListPage() {

    const dispath = useDispatch();
    const posts = useSelector((state) => state.toolkit.posts)
    const pageLoaded = useSelector((state) => state.toolkit.pageLoaded)

    console.log(pageLoaded)
    if (!pageLoaded) {
        dispath(getPosts())
        dispath(updatePageLoaded(true))
    }

    return (

        < section className='posts' >

            <div className='container'>
                <h1 className="posts__title">Posts list</h1>
                {posts.length > 0 ?
                    <div className="posts__block">
                        {posts.map((post) => <PostsListItem post={post} key={post.id} />)}
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
