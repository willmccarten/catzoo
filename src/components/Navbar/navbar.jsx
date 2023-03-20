import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
import ReactDOM from 'react-dom';
import App from '../../App.jsx';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/faq" activeStyle>
                        FAQ
                    </NavLink>
                    <NavLink to="/classes" activeStyle>
                        Classes
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;