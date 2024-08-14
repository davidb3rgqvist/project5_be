// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import styles from '../styles/NavBar.module.css';
// import api from '../api';
// import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';

// const NavBar = () => {
//     const navigate = useNavigate();
//     const currentUser = useCurrentUser();
//     const setCurrentUser = useSetCurrentUser();

//     const handleLogout = async () => {
//         try {
//             const refreshToken = localStorage.getItem('refreshToken');
//             if (refreshToken) {
//                 await api.post('/dj-rest-auth/logout/', { refresh_token: refreshToken });
//                 localStorage.removeItem('accessToken');
//                 localStorage.removeItem('refreshToken');
//                 setCurrentUser(null);
//                 navigate('/login');
//             } else {
//                 navigate('/login');
//             }
//         } catch (error) {
//             console.error("Logout failed", error);
//             navigate('/login');
//         }
//     };

//     return (
//         <Navbar bg="light" expand="lg" className={styles.navbar}>
//             <Navbar.Brand as={Link} to="/" className={styles.navbarBrand}>
//                 MyApp
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarToggler} />
//             <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarCollapse}>
//                 <Nav className="ml-auto">
//                     <Nav.Link as={Link} to="/" className={styles.navLink}>
//                         Home
//                     </Nav.Link>
//                     <Nav.Link as={Link} to="/about" className={styles.navLink}>
//                         About
//                     </Nav.Link>
//                     {currentUser ? (
//                         <Nav.Link onClick={handleLogout} className={styles.navLink}>
//                             Logout
//                         </Nav.Link>
//                     ) : (
//                         <>
//                             <Nav.Link as={Link} to="/login" className={styles.navLink}>
//                                 Login
//                             </Nav.Link>
//                             <Nav.Link as={Link} to="/register" className={styles.navLink}>
//                                 Register
//                             </Nav.Link>
//                         </>
//                     )}
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     );
// };

// export default NavBar;
