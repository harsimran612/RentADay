import React from 'react';

const UtilsContext = React.createContext(null)

export function useUtils() {
    return React.useContext(UtilsContext)
}

export const UtilsProvider = ({ children }) => {
    const [OpenBackdrop, setOpenBackdrop] = React.useState(false)
    const [SnackbarInfo, setSnackbarInfo] = React.useState({open: false, message: '', type: '', duration: 2000})

    const handleBackdrop = (value) => {
        setOpenBackdrop(value)
    }

    const handlerSnackbar = (value) => {
        setSnackbarInfo({ open: true, message: value.message, type: value.type, duration: value.duration })
    }

    const closeSnackbar = () => {
        setSnackbarInfo({ open: false, message: '', type: '', duration: 2000 })
    }

    return (
        <UtilsContext.Provider value={{ OpenBackdrop, handleBackdrop, SnackbarInfo, handlerSnackbar, closeSnackbar }}>
            {children}
        </UtilsContext.Provider>
    )
}