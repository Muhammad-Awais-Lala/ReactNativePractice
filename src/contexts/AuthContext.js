import React, { createContext, useContext, useReducer } from 'react'

const AuthContext = createContext()
const initialState = { isAuth: false }

const reducer = (state, {type}) => {
    switch (type) {
        case "SET_LOGED_IN":
            return Object.assign({}, { isAuth: true })
        case "SET_LOGED_OUT":
            return Object.assign({}, { isAuth: false }) //Object.assign() JS method 
        default:
            return state
    }
}
export default function AuthContextProvider(props) {

    const [state,dispatch]=useReducer(reducer,initialState)

    return (
        <AuthContext.Provider value={{...state,dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const  useAuthContext =()=> useContext(AuthContext)