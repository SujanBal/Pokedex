import React from 'react'
import './Navbar.scss'
import NavbarItem from './NavbarItem'
import NavbarLogo from './NavbarLogo'

export default function index() {
    return (
        <header className='navbar'>
            <NavbarLogo />
            <NavbarItem />
        </header>
    )
}
