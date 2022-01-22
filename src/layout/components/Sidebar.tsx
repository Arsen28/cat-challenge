import React, { useEffect } from 'react';
import style from './sidebar.module.css';
import NavItem from './navItem/NavItem';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getCategories, selectCategories } from './categoriesSlice';

const Sidebar = () => {
    const categories = useAppSelector(selectCategories);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getCategories())
    }, []);
    return (
        <nav className={style.sidebar}>
            <NavItem label="Home" to="/" />
            {
                categories && categories.map(category => 
                    <NavItem  key={category.id} label={category.name} to={`/${category.id}`} />
                )
            }
        </nav>
    );
};

export default Sidebar;