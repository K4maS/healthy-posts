import { useSelector } from "react-redux";
import './AboutMePage.scss';
import BackLinkModule from "../../modules/BackLinkModule/BackLinkModule";
import { mainPath } from "../../api/paths";
function AboutMePage() {
    const aboutCreator = useSelector((state) => state.toolkit.aboutCreator);
    return (
        <section className='about-me'>
            <div className='container'>
                <BackLinkModule link={mainPath} text={'На главную'} />
                <h1 className="about-me__title">About creator</h1>
                {aboutCreator &&
                    <div className="me__block mb-5">
                        <img className='me__avatar' src={aboutCreator.avatar} alt="avatar" />
                        <div className="me__text-block">
                            <h2 className="me__title">{aboutCreator.username}</h2>
                            <p className="me__data"><span className="me__description">Имя</span>{aboutCreator.name}</p>
                            <a className="me__data" href={'mailto:' + aboutCreator.email}><span className="me__description">Почта</span>{aboutCreator.email}</a>
                            <a className="me__data" href={'tel:' + aboutCreator.phone}><span className="me__description">Номер телефона</span>{aboutCreator.phone}</a>
                            <a className="me__data" href={aboutCreator.website}><span className="me__description">Git</span>{aboutCreator.website}</a>
                            <a className="me__data" href={aboutCreator.headhunter}><span className="me__description">Резюме в HH</span>ссылка на резюме</a>
                        </div>
                        <div className="me__block-bottom">
                            <h3 className="me__block-title"> Обо мне </h3>
                            <p className="me__block-text">{aboutCreator.about}</p>
                            <h3 className="me__block-title"> Навыки </h3>
                            <ul className="me__skills-list">
                                {aboutCreator.skills.map((elem) => <div className="me__item">{elem}</div>)}
                            </ul>
                        </div>
                    </div>

                }
            </div>
        </section>
    );
}

export default AboutMePage;
