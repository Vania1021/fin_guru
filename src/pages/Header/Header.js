import React from 'react';
import './Header.css'; 
import MSC_Logo from "./images/home_page.jpg";
const Header = () => {
  return (
   
    <header class="containerheader blue ">
  <nav>
    <div class="logoheader">
      <img src={MSC_Logo}></img>
    </div>
    <input type="checkbox" id="menu-toggle"/>
    <label for="menu-toggle" class="menu-icon">&#9776;</label>
    <ul class="menu">
      <li ><a href="/">Home</a></li>
      <li ><a href="/events">Events</a></li>
      <li ><a href="/team">Team</a></li>
      <li ><a href="/contact">Contact Us</a></li>
      <li ><a href="/faq">FAQ</a></li>
      <li ><a href="/blog">Blogs</a></li>
    </ul>
  </nav>
</header>
  );
};

export default Header;
