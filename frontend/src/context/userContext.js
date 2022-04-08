import React from 'react';

const UserContext = React.createContext(null)

export function useAuth() {
    return React.useContext(UserContext)
}

export const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState(null)

    React.useEffect(() => {
        const user = JSON.parse(localStorage.getItem('rent-a-day-user'))
        if (user) {
            setUser(user)
        }
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
