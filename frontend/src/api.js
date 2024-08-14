// import axios from "axios";

// // Function to get the CSRF token from cookies
// function getCsrfToken() {
//     const cookies = document.cookie.split(';');
//     for (let cookie of cookies) {
//         const [name, value] = cookie.trim().split('=');
//         if (name === 'csrftoken') {
//             return value;
//         }
//     }
//     return '';
// }

// // Global Axios defaults
// axios.defaults.baseURL = "https://healthhub-b-07427806ade9.herokuapp.com/";
// axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.withCredentials = true;

// // Create Axios instance
// const api = axios.create({
//     baseURL: 'https://healthhub-b-07427806ade9.herokuapp.com/',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     withCredentials: true,
// });

// // Add a request interceptor to include CSRF token and Authorization header
// api.interceptors.request.use(
//     (config) => {
//         const csrfToken = getCsrfToken();
//         if (csrfToken) {
//             config.headers['X-CSRFTOKEN'] = csrfToken;
//         }
//         const token = localStorage.getItem('accessToken');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// export default api;
