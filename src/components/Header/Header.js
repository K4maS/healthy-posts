import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiActivity, FiX } from "react-icons/fi";
import { ImSortAlphaAsc, ImSortAlphaDesc } from "react-icons/im";
import { TbArrowsSort } from "react-icons/tb";
import { IconContext } from 'react-icons';
import './Header.scss';
import NavMenuModule from '../../modules/NavMenuModule/NavMenuModule';
import { useDispatch, useSelector } from 'react-redux';
import { postsSorting, updateSearching } from '../../store/toolkitSllice';


function Header() {
    const dispath = useDispatch();
    const searchValue = useSelector((state) => state.toolkit.searchValue);
    const [menuIsActive, setMenuIsActive] = useState(false);
    const [sortOrder, setSortOrder] = useState(undefined);
    const closeMenu = () => {
        setMenuIsActive(false);
    };
    // Изменение значения поиска и поля поиска
    const searchPocess = (e) => {
        dispath(updateSearching(e.target.value))
        console.log(e.target.value);
    }
    // Удаления значения для поиска и поля для поиска
    const clearSearchValue = () => {
        dispath(updateSearching(''));
    }
    const changePostSorting = () => {
        if (sortOrder === undefined) {
            setSortOrder(false);
        }
        setSortOrder(!sortOrder);
        dispath(postsSorting(sortOrder));
    }
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
                    <button className='header__filter' onClick={changePostSorting}>
                        {sortOrder === undefined ? < TbArrowsSort /> :
                            <span>
                                {!sortOrder ? <ImSortAlphaAsc /> : <ImSortAlphaDesc />}
                            </span>}
                    </button>
                    <input type='search' placeholder='Поиск' value={searchValue} className="form-control header__search" onInput={searchPocess} />
                    {searchValue.length > 0 && <button className='header__search-clear' onClick={clearSearchValue}> <FiX /></button>}
                </div>

                {menuIsActive && <div className='header__blackout' onClick={closeMenu} ></div>}
                <nav className='header__nav nav'>
                    <button className='nav__burger burger btn-reset' onClick={() => { setMenuIsActive(true) }}>
                        <span className='burger__line'></span>
                        <span className='burger__line'></span>
                        <span className='burger__line'></span>
                    </button>

                    {menuIsActive && <NavMenuModule onClose={closeMenu} />}
                </nav>
            </div>
        </header >
    );
}

export default Header;
