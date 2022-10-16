import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext(localStorage.getItem("user"));

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("user"));
    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    );
};






export default UserContext;