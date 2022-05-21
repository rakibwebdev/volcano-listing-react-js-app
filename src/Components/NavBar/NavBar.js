import React from 'react'
import './NavBar.css';
function NavBar() {
    const pathHome = window.location.pathname === '/' ? 'active' : '';
    const pathVolcaoList = window.location.pathname === '/volcanolist' ? 'active' : '';
    const pathLogin = window.location.pathname === '/login' ? 'active' : '';
    const pathRegister = window.location.pathname === '/register' ? 'active' : '';



    return (
        <div className="navbar">
            <ul className="navbar__wrapper">
                <li className="navbar__item">
                    <a href="/" className={pathHome}>Home</a>
                </li>
                <li className="navbar__item">
                    <a href="/volcanolist" className={pathVolcaoList}>Volcano List</a>
                </li>
                <li className="navbar__item">
                    <a href="/login" className={pathLogin}>Login</a>
                </li>
                <li className="navbar__item">
                    <a href="/register" className={pathRegister}>Register</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar