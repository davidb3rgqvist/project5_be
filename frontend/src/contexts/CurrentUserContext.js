// import { createContext, useContext, useMemo, useState } from "react";
// import api from "../api";
// import { useFetchCurrentUser } from "../hooks/useFetchCurrentUser";
// import { useNavigate } from "react-router-dom";

// export const CurrentUserContext = createContext();
// export const SetCurrentUserContext = createContext();

// export const useCurrentUser = () => useContext(CurrentUserContext);
// export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

// export const CurrentUserProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);
//     useFetchCurrentUser(); // Use the custom hook here
//     const navigate = useNavigate();

//     useMemo(() => {
//         api.interceptors.request.use(
//             async (config) => {
//                 try {
//                     await api.post("/dj-rest-auth/token/refresh/");
//                 } catch (err) {
//                     setCurrentUser(null);
//                     navigate("/login");
//                     return config;
//                 }
//                 return config;
//             },
//             (err) => {
//                 return Promise.reject(err);
//             }
//         );

//         api.interceptors.response.use(
//             (response) => response,
//             async (err) => {
//                 if (err.response?.status === 401) {
//                     try {
//                         await api.post("/dj-rest-auth/token/refresh/");
//                     } catch (err) {
//                         setCurrentUser(null);
//                         navigate("/login");
//                     }
//                     return api(err.config);
//                 }
//                 return Promise.reject(err);
//             }
//         );
//     }, [navigate]);

//     return (
//         <CurrentUserContext.Provider value={currentUser}>
//             <SetCurrentUserContext.Provider value={setCurrentUser}>
//                 {children}
//             </SetCurrentUserContext.Provider>
//         </CurrentUserContext.Provider>
//     );
// };
