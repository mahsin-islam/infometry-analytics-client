import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Siderbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCommentAlt, faUserPlus, faCog, faFileMedical, faList, faUserAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';
import { faBuffer } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';

const Sidebar = ({ setTitle }) => {
    const { admin } = useContext(UserContext);

    return (
        <div>
            <div className="sideBrand">
                <div className="sideBrnIcon">
                    <Link to="/">
                        <img src={logo} alt="logo" style={{ width: '10rem', height: '4rem' }} className="logo" />
                    </Link>
                </div>

            </div>
            <nav id="sideNavbar">
                <ul>
                    <li>
                        <NavLink onClick={() => setTitle('Profile')} activeClassName="activePage" exact to="/dashboard/profile">
                            <FontAwesomeIcon icon={faUserCircle} className="iconC" /> Profile
                        </NavLink>
                    </li>
                    {admin ?
                        <>
                            <li>
                                <NavLink onClick={() => setTitle('Order List')} activeClassName="activePage" to="/dashboard/orderList">
                                    <FontAwesomeIcon icon={faList} className="iconC" /> Order list
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Add Service')} activeClassName="activePage" to="/dashboard/addService">
                                    <FontAwesomeIcon icon={faFileMedical} className="iconC" /> Add Service
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Make Admin')} activeClassName="activePage" to="/dashboard/makeAdmin">
                                    <FontAwesomeIcon icon={faUserPlus} className="iconC" /> Make Admin
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Manage Services')} activeClassName="activePage" to="/dashboard/manageServices">
                                    <FontAwesomeIcon icon={faCog} className="iconC" /> Manage Services
                                </NavLink>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <NavLink onClick={() => setTitle('Book')} activeClassName="activePage" exact to="/dashboard/book">
                                    <FontAwesomeIcon icon={faShoppingCart} className="iconC" /> Book
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Booking List')} activeClassName="activePage" to="/dashboard/booking">
                                    <FontAwesomeIcon icon={faList} className="iconC" /> Booking List
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Testimonial')} activeClassName="activePage" to="/dashboard/review">
                                    <FontAwesomeIcon icon={faCommentAlt} className="iconC" /> Testimonial
                                </NavLink>
                            </li>
                        </>}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;