import { useParams } from "react-router";
import BackLinkModule from "../../modules/BackLinkModule/BackLinkModule";
import { useSelector } from "react-redux";
import './AboutUserPage.scss';

function AboutUserPage() {
    const { id } = useParams();
    console.log(id);
    const users = useSelector((state) => state.toolkit.users);
    const user = users.find((user) => user.id == id);
    console.log(user);
    return (
        <section className='user'>
            <div className='container'>
                <BackLinkModule user link={'/'} text={'На главную'} />
                <div className="user__block">
                    <img className='user__avatar' src={user.avatar} alt="avatar" />
                    <h1 className="user__title">{user.username}</h1>
                    <p>{user.name}</p>

                </div>

            </div>
        </section>
    );
}

export default AboutUserPage;
