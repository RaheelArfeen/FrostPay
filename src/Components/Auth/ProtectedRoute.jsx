import { Navigate, useLocation } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext); // Get user and loading state from context
  const location = useLocation();

  if (loading) {
    // While loading, you can render a loading spinner or null
    return ;
  }

  if (!user) {
    // Redirect to login if user is not authenticated
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children; // If authenticated, render protected route
};
