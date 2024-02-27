import React, { createContext, useState, ReactNode } from 'react';

export const AuthContext = createContext<{
    isLoggedIn: boolean;
    userId: string;
    userName: string;
    user: User;
    setLoggedIn: (loggedIn: boolean) => void;
    setUserId: (userId: string) => void;
    setUserName: (userName: string) => void;
    setUser: (user: User) => void;
}>({
    isLoggedIn: false,
    userId: '',
    userName: '',
    user: new User,
    setUserId: () => {},
    setLoggedIn: () => {},
    setUserName: () => {},
    setUser: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [user, setUsu] = useState(new User);

    const setLoggedIn = (loggedIn: boolean) => {
        setIsLoggedIn(loggedIn);
    }

    const setUser = (user: User) => {
        setUsu(user);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, userId, userName, user,
            setLoggedIn, setUserId, setUserName, setUser}}>
            {children}
        </AuthContext.Provider>
    );
}