// import { useEffect, useCallback } from "react";
// import api from "../api";
// import { useSetCurrentUser } from "../contexts/CurrentUserContext";

// export const useFetchCurrentUser = () => {
//     const setCurrentUser = useSetCurrentUser();

//     const handleMount = useCallback(async () => {
//         console.log("Fetching current user...");
//         try {
//             const { data } = await api.get("dj-rest-auth/user/");
//             console.log("User fetched:", data);
//             setCurrentUser(data);
//         } catch (err) {
//             console.error("Error fetching user:", err);
//         }
//     }, [setCurrentUser]);

//     useEffect(() => {
//         handleMount();
//     }, [handleMount]);
// };
