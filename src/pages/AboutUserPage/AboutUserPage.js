import { useParams } from "react-router";
import BackLinkModule from "../../modules/BackLinkModule/BackLinkModule";
import { useDispatch, useSelector } from "react-redux";
import './AboutUserPage.scss';
import { getPosts, getUsers, updatePageLoaded } from "../../store/toolkitSllice";
import PostsListItem from "../../components/PostsListItem/PostsListItem";

function AboutUserPage() {
    const { id } = useParams();
    console.log(id);
    const dispath = useDispatch();
    const users = useSelector((state) => state.toolkit.users);
    const user = users.find((user) => user.id == id);
    const posts = useSelector((state) => state.toolkit.posts);
    const currentUserPosts = posts.filter((post) => post.userId == id);
    const pageLoaded = useSelector((state) => state.toolkit.pageLoaded);


    return (
        <section className='user'>
            <div className='container'>

                <BackLinkModule user link={'/'} text={'На главную'} />
                {user ?
                    <div className="user__block mb-5">
                        <img className='user__avatar' src={user.avatar} alt="avatar" />
                        <div className="user__text-block">
                            <h1 className="user__title">{user.username}</h1>
                            <p className="user__data"><span className="user__description">ФИО</span>{user.name}</p>
                            <p className="user__data"><span className="user__description">Почта</span>{user.email}</p>
                            <p className="user__data"><span className="user__description">Номер телефона</span>{user.phone}</p>
                            <p className="user__data"><span className="user__description">Сайт</span>{user.website}</p>

                        </div>

                    </div>
                    :
                    <div className="user__block  mb-5">
                        <div className='user__avatar-placeholder' />
                        <div className="user__text-block">
                            <div className='user__title-placeholder' />
                            <div className='user__data-placeholder' />
                            <div className='user__data-placeholder' />
                            <div className='user__data-placeholder' />
                            <div className='user__data-placeholder' />
                        </div>
                    </div>
                }
                {currentUserPosts.length > 0 ?
                    <div className="posts__block">
                        {currentUserPosts.map((post) => <PostsListItem user={user} post={post} key={post.id} />)}
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
        </section>
    );
}

export default AboutUserPage;
