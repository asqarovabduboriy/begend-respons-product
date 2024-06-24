import React from "react";
import "./Navbar.css";
import logo from "../../assets/imgs/asaxiy-logo.svg";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import taqoslqsh from "../../assets/imgs/taqoslash.svg";
import tolov from "../../assets/imgs/payment.svg";
import dostavka from "../../assets/imgs/tracker.svg";
import cart from "../../assets/imgs/cart.svg";
import heart from "../../assets/imgs/heart.svg";
import til from '../../assets/imgs/til.svg';
import user from '../../assets/imgs/avatar.svg'
import NavItem from "../navitem/NavItem";
const Navbar = () => {
  return (
    <>
      <header>
        <div className="container flex_elemnt_header">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="category_search">
            <button className="category_btn">
              <RxHamburgerMenu />
              Category
            </button>
            <form className="search">
              <input type="text" placeholder="Search" />
              <button>Search</button>
            </form>
          </div>
          <div className="icons_container">
            <div className="icons_one">
              <img src={taqoslqsh} alt="" />
              <p>Taqoslash</p>
            </div>
            <div className="icons_one">
              <img src={tolov} alt="" />
              <p>To'lov</p>
            </div>
            <div className="icons_one">
              <img src={dostavka} alt="" />
              <p>Dostavka</p>
            </div>
            <div className="icons_one">
              <img src={cart} alt="" />
              <p>Savatcha</p>
            </div>
            <div className="icons_one">
              <img src={heart} alt="" />
              <p>Favorit</p>
            </div>{" "}
            <div className="icons_one">
              <img src={til} alt="" />
              <p>O'zbekcha</p>
            </div>
          </div>
          <div className="icons_one">
          <NavLink to="/login">
               <img src={user} alt=""  width={15} height={15}/>
            </NavLink>
            <p>Kirish</p>
          </div>
        </div>
        <div className="line"></div>
      </header>
      <NavItem/>
    </>
  );
};

export default Navbar;
