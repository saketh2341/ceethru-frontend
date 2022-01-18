import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  FileName: JSON.parse(localStorage.getItem("FileName")) || null,
  SelectedFile:JSON.parse(localStorage.getItem("SelectedFile")) || null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("FileName", JSON.stringify(state.FileName));
    localStorage.setItem("SelectedFile", JSON.stringify(state.SelectedFile));
  }, [state.FileName,state.SelectedFile]);

  return (
    <AuthContext.Provider
      value={{
        FileName: state.FileName,
        SelectedFile:state.SelectedFile,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
