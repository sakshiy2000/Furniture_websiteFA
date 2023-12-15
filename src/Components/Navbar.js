import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    {/* <img src='.\assets\Images\logofurniture.jpg'width={'40%'}/> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                             
                            <li className='nav-item'>
                                <NavLink className="btn btn-outline-primary m-2" to={'/'}>Home</NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink className="btn btn-outline-primary m-2" to={'/living'}>Living</NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink className="btn btn-outline-primary m-2" to={'/dining'}>Dining</NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink className="btn btn-outline-primary m-2" to={'/bedroom'}>Bedroom</NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink className="btn btn-outline-primary m-2" to={'/office'}> Office</NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink className="btn btn-outline-primary m-2" to={'/blog'}> Blog</NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink className="btn btn-outline-primary m-2" to={'/contact'}> Contact</NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink className="btn btn-outline-primary m-2" to={'/about'}> About</NavLink>
                            </li>

                             
                        </ul>

                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar