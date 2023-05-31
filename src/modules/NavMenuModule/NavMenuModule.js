import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiX } from "react-icons/fi";
import './NavMenuModule.scss';

class NavMenuModule extends React.Component {
    render() {
        return (
            <ul className='nav__list' >
                <button className='nav__close btn-reset' onClick={() => this.props.onClose()}>
                    <FiX />
                </button>

                <li className='nav__item item'>
                    <NavLink className='item__link' to='/' onClick={() => this.props.onClose()}>
                        Посты
                    </NavLink>
                </li>
                <li className='nav__item item'>
                    <NavLink className='item__link' to='/about-me' onClick={() => this.props.onClose()}>
                        Обо мне
                    </NavLink>
                </li>
            </ul>
        );

    }
}
export default NavMenuModule;
