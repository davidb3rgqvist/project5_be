// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../../api';
// import { useSetCurrentUser } from '../../contexts/CurrentUserContext';

// const Register = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');
//     const setCurrentUser = useSetCurrentUser();
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             setError('Passwords do not match');
//             return;
//         }
//         try {
//             const response = await api.post('/dj-rest-auth/registration/', {
//                 username,
//                 password1: password,
//                 password2: confirmPassword,
//             });
//             localStorage.setItem('accessToken', response.data.access_token);
//             localStorage.setItem('refreshToken', response.data.refresh_token);
//             setCurrentUser(response.data.user);
//             navigate('/');
//         } catch (err) {
//             setError('Registration failed');
//         }
//     };

//     return (
//         <div className="auth-container">
//             <h2>Register</h2>
//             {error && <p className="error">{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Confirm Password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default Register;
