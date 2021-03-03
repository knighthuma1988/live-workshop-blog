import React from 'react'

const Layout = ( { children } ) => {
    return (
        <div>
            <h1>My Blog!</h1>
            { children }
            <footer>
                <h6>Created by Brandon Turner</h6>
            </footer>
        </div>
    )
}

export default Layout
