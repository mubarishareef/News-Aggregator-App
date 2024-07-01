'use client'
import React from 'react'

const Header = () => {
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl d-flex align-items-center nav-tools">
                <h1>Compass</h1>
                <div className="position-relative">
                    <form action="" method="post">
                        <input type="email" name="email" /><input type="submit" value="Search" />
                    </form>
                </div>
            </div>

        </header>
    )
}

export default Header
