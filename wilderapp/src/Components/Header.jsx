import React from 'react'
import { Link } from 'react-router-dom';
import "../css/header.css";

export default function Header() {
  return (
    <header className='Header'>
        <Link to="/">
            POSTS
        </Link>
        <Link to="/wordpress">
            WORDPRESS
        </Link>
        <h1 style={{color: "tomato"}}>POSTS APPLICATION</h1>
    </header>
  )
}
