import { useParams } from "react-router";
import BackLinkModule from "../../modules/BackLinkModule/BackLinkModule";
import { useSelector } from "react-redux";
import './AboutUserPage.scss';
import PostsListItem from "../../components/PostsListItem/PostsListItem";
import Spinner from "../../modules/Spinner/Spinner";

function AboutUserPage() {
    const { id } = useParams();
    console.log(id);

    const users = useSelector((state) => state.toolkit.users);
    const user = users.find((user) => user.id == id);
    const posts = useSelector((state) => state.toolkit.postsFiltered);
    const currentUserPosts = posts.filter((post) => post.userId == id);
    const loadingProcess = useSelector((state) => state.toolkit.loadingProcess);
    const loadingError = useSelector((state) => state.toolkit.loadingError);


    return (
        <section className='user'>
            <div className='container'>

                <BackLinkModule user link={'/'} text={'На главную'} />
                {user ?
                    <div className="user__block mb-5">
                        <img className='user__avatar' src={user.avatar} alt="avatar" />
                        <div className="user__text-block">
                            <h1 className="user__title">{user.username}</h1>
                            <p className="user__data"><span className="user__description">Имя</span>{user.name}</p>
                            <a className="user__data" href={'mailto:' + user.email}><span className="user__description">Почта</span>{user.email}</a>
                            <a className="user__data" href={'tel:' + user.phone}><span className="user__description">Номер телефона</span>{user.phone}</a>
                            <a className="user__data" href={'http://' + user.website}><span className="user__description">Сайт</span>{user.website}</a>

                        </div>

                    </div>
                    :
                    <div className="user__block  mb-5">
                        {loadingProcess &&
                            <div className="user__block  mb-5">
                                <div className='user__avatar-placeholder placeholder' />
                                <div className="user__text-block">
                                    <div className='user__title-placeholder placeholder' />
                                    <div className='user__data-placeholder placeholder' />
                                    <div className='user__data-placeholder placeholder' />
                                    <div className='user__data-placeholder placeholder' />
                                    <div className='user__data-placeholder placeholder' />
                                </div>
                            </div>
                        }
                        {loadingError &&
                            <div className="user__error">
                                <h1 className="user__error-text">Произошла ошибка</h1>
                            </div>
                        }
                    </div>
                }
                {currentUserPosts.length > 0 ?
                    <div className="posts__block">
                        {currentUserPosts.map((post) => <PostsListItem user={user} post={post} key={post.id} />)}
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
        </section>
    );
}

export default AboutUserPage;
