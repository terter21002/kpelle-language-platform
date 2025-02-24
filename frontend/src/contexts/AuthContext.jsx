import { createContext, useReducer, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const initialState = {
  user: null,
  isAuthenticated: false,
  token: null,
};

const AuthContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
// Validate the children prop
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is required
};
// Create a custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
