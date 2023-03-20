import React from "react";
import { Nav, NavLink, NavMenu }
    from "./navbarElements";
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
                    <NavLink to="/homeA" activeStyle>
                        App A
                    </NavLink>
                    <NavLink to="/homeB" activeStyle>
                        App B
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;