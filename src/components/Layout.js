import React from 'react'
import "../styles/style.css"

const Layout = ( { children } ) => {
    return (
        <div>
            <h1 className="title">My Blog!</h1>
            { children }
            <footer>
                <h6>Created by Brandon Turner</h6>
            </footer>
        </div>
    )
}

export default Layout
