import React, {createContext, useContext, useReducer} from "react";

// Preapring the dataLayer
export const StateContext = createContext();

//wrap our app and provide the Data layer
export const StateProvider = ({reducer,intialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,intialState)}>
        {children}
        </StateContext.Provider>
)
export const useStateValue=()=> useContext(StateContext);