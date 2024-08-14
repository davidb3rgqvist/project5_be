// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../../api';
// import { useSetCurrentUser } from '../../contexts/CurrentUserContext';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const setCurrentUser = useSetCurrentUser();
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await api.post('/api-auth/login/', { username, password });

//             console.log(response.data);
            
//             if (response.data.access && response.data.refresh) {
//                 localStorage.setItem('accessToken', response.data.access);
//                 localStorage.setItem('refreshToken', response.data.refresh);
                
//                 const userResponse = await api.get('/dj-rest-auth/user/');
//                 setCurrentUser(userResponse.data);

//                 navigate('/'); // Redirect to home after successful login
//             } else {
//                 setError('Login failed. Please try again.');
//             }
//         } catch (err) {
//             console.error('Login error:', err.response ? err.response.data : err.message);
//             setError('Invalid username or password');
//         }
//     };

//     return (
//         <div className="auth-container">
//             <h2>Login</h2>
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
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;
