import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, Nav, NavItem, NavItems, User } from './Navbar.element';

const Navbar = () => {
    return (
        <Nav>
            <Logo>
                Logo Job Hunter
            </Logo>
            < NavItems >

                <NavItem>
                    <Link>
                        <i className="fas fa-envelope"></i>
                    </Link>
                </NavItem>

                <NavItem>
                    <User>
                        <img src="" alt="" />
                        <p>User Name</p>
                        <select title="algi" style={{ width: "20px", height: "100%" }} name="" id="">
                            <option value="Profile">
                                Profile
                                </option>
                            <option value="">
                                Logout
                                    </option>
                        </select>

                    </User>
                </NavItem>

            </ NavItems >
        </Nav >

    );
};



export default Navbar;