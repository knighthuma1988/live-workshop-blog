import { Link } from 'gatsby'
import React from 'react'
import "../styles/style.css"

const Layout = ( { children, pageTitle } ) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <h1 className="title">{pageTitle}</h1>
            <nav>
                <ul className="nav-bar">
                    <li className="nav-bar-link">
                        <h3><Link to="/">Home</Link></h3>
                    </li>
                    <li className="nav-bar-link">
                        <h3><Link to="/about">About</Link></h3>
                    </li>
                </ul>
            </nav>
            <body>
            { children }
            </body>
            <footer>
                <h6>Created by Brandon Turner</h6>
            </footer>
        </div>
    )
}

export default Layout
