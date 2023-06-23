import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiX } from "react-icons/fi";
import './NavMenuModule.scss';
import { useSelector, useDispatch } from 'react-redux';
import { updateMenuIsActive } from '../../store/toolkitSllice';
import { aboutMePath, mainPath } from '../../api/paths';

function NavMenuModule() {
    const aboutCreator = useSelector(state => state.toolkit.aboutCreator);
    console.log(aboutCreator);
    const dispath = useDispatch();
    const changeMenuStatus = (value) => {
        dispath(updateMenuIsActive(value));
    };
    return (

        <ul className='nav__list' >
            <button className='nav__close btn-reset' onClick={() => { changeMenuStatus(false) }}>
                <FiX />
            </button>

            <li className='nav__item item'>
                <NavLink className='item__link' to={mainPath} onClick={() => { changeMenuStatus(false) }}>
                    Посты
                </NavLink>
            </li>
            <li className='nav__item item'>
                <NavLink className='item__link' to={aboutMePath} onClick={() => { changeMenuStatus(false) }}>
                    Обо мне
                </NavLink>
            </li>
            <li className='nav__item item'>
                <a className='item__email-link' href={'mailto:' + aboutCreator.email}>
                    <img className='item__avatar' src={aboutCreator.avatar} alt={aboutCreator.name} />
                    <span>
                        {aboutCreator.email}
                    </span>
                </a>
            </li>
        </ul>


    );


}
export default NavMenuModule;
