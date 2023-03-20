//this is the styling for the navbar elements

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background-color: #FBAB7E;
background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
  height: 70px;
  width:100%;
  display: flex;
  position: absolute;
  justify-content: space-between;
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #090909;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: white;
    background-color: #E38266;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #090909;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
width: 100vw;
white-space: nowrap;
@media screen and (max-width: 768px) {
	display: none;
}
`;