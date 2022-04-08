import React, { createContext } from "react";

/** Auth Context */
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {


    const contextValuesAuth = {};
    return (
        <AuthContext.Provider value={contextValuesAuth}>
            {children}
        </AuthContext.Provider>
    );
};
