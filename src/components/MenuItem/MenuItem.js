import React from 'react';
import { NavLink } from 'react-router-dom';
import { Item } from './MenuItem.elements'

const MenuItem = ({ icon, title, link, pannel }) => {
    const url = `/${pannel}-panel/${link}`;

    return (
        <NavLink to={url} activeClassName="active">
            <Item >
                <img src={icon} alt="" />
                <p> {title} </p>
            </Item>
        </NavLink>
    );
};

export default MenuItem;