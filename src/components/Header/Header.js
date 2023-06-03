import React from 'react';
import { Link } from 'react-router-dom';
import { FiActivity, FiX } from "react-icons/fi";
import { IconContext } from 'react-icons';
import './Header.scss';
import NavMenuModule from '../../modules/NavMenuModule/NavMenuModule';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuIsActive: false,
        }

        this.closeMenu = this.closeMenu.bind(this)
    }

    render() {
        return (
            <header className="header" >
                <div className='container'>
                    <IconContext.Provider value={{ color: "green", className: "header__logo", size: '2em' }}>
                        <Link className='header__logo-link' to={'/'}>
                            <span className="header__logo-text">Healthy</span>
                            <FiActivity className="header__logo-image" />
                            <span className="header__logo-text">posts</span>
                        </Link>

                    </IconContext.Provider>
                    <div className='header__search-block'>
                        <input type='search' className="form-control header__search" />
                        <button className='header__search-clear'> <FiX /></button>
                    </div>

                    {this.state.menuIsActive && <div className='header__blackout' onClick={this.closeMenu} ></div>}
                    <nav className='header__nav nav'>
                        <button className='nav__burger burger btn-reset' onClick={() => { this.setState({ menuIsActive: true }) }}>
                            <span className='burger__line'></span>
                            <span className='burger__line'></span>
                            <span className='burger__line'></span>
                        </button>

                        {this.state.menuIsActive && <NavMenuModule onClose={this.closeMenu} />}
                    </nav>
                </div>
            </header >
        );
    }

    closeMenu() {
        this.setState({ menuIsActive: false })
    }

}

export default Header;
