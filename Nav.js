import React from 'react'
import 'bootstrap/js/dist/dropdown'

function Nav(){
    return(
        <nav className='navbar navbar-expand-sm navbar-dark bg-transparent '>
            <i className='navbar-brand bi bi-justify-left fs-4' ></i>
            <button className='navbar-toggler d-lg-none' type='button' dat-bs-toggle='collapse'data-aria-aria-expanded='false' aria-label='Toggle navigation'></button>
        <div className='collapse navbar-collapse' id='collapsibleNavid'>
            <ul className='navbar-nav ms-auto mt-2 mt-lg-0'>
                <li className='nav-item dropdown'>
                    <a className='nav-link dropdown-toggle' href='#' id='dropdownId' data-bs-toggle='dropdown'arial-aria-haspopup='true'
                    aria-aria-expanded='false'>
                        Nathan
                    </a>
                    <div className='dropdown-menu' aria-labelledby='dropdownId'>
                        <a className='dropdown-item' href='#'>profile</a>
                        <a className='dropdown-item' href='#'>setting</a>
                        <a className='dropdown-item' href='#'>Logout</a>
                    </div>
                </li>
            </ul>
            {/* <form className='d-flex my-2 my-lg-0'>
                <input className='form-control me-sm-2' type='text'placeholder='Search'/>
                <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>Search</button>
            </form> */}
            
        </div>
        </nav>
    )
    
}
export default Nav;