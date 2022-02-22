// setup data layer
// we need this to track the basket

import { createContext, useContext, useReducer } from "react";

// This is the DATA LAYER
export const StateContext = createContext();

// build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
