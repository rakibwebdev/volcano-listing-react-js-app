import React, { Fragment } from 'react'
import './NavBar.css';
function NavBar() {
    const pathHome = window.location.pathname === '/' ? 'active' : '';
    const pathVolcaoList = window.location.pathname === '/volcanolist' ? 'active' : '';
    const pathLogin = window.location.pathname === '/login' ? 'active' : '';
    const pathRegister = window.location.pathname === '/register' ? 'active' : '';

    const handleCick = (e) => {
        e.preventDefault();
        // delete the localStorage and redirect to login page
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    const token = localStorage.getItem('token');


    return (
        <div className="navbar">
            <ul className="navbar__wrapper">
                <li className="navbar__item">
                    <a href="/" className={pathHome}>Home</a>
                </li>
                <li className="navbar__item">
                    <a href="/volcanolist" className={pathVolcaoList}>Volcano List</a>
                </li>
                {token == null ?
                    <Fragment>
                    <li className="navbar__item">
                        <a href="/login" className={pathLogin}>Login</a>
                    </li>
                    
                    <li className="navbar__item">
                        <a href="/register" className={pathRegister}>Register</a>
                    </li>
                    </Fragment> :
                    null
                }
                {token != null ?
                    <li className="navbar__item">
                        <a href="/" onClick={handleCick}>Logout</a>
                    </li>
                    :
                    null
                }
                
            </ul>
        </div>
    )
}

export default NavBar