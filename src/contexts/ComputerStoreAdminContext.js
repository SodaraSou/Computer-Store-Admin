import { useReducer, createContext } from "react";
import ComputerStoreAdminReducer from "./ComputerStoreAdminReducer";

const ComputerStoreAdminContext = createContext();

export const ComputerStoreAdminProvider = ({ children }) => {
  const initialState = {
    loading: false,
  };
  const [state, dispatch] = useReducer(ComputerStoreAdminReducer, initialState);

  return (
    <ComputerStoreAdminContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ComputerStoreAdminContext.Provider>
  );
};

export default ComputerStoreAdminContext;
