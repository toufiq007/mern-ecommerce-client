import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

type CheckAuthProps = {
  isAuthenticated: boolean;
  user: any;
  children: ReactNode;
};

const CheckAuth = ({ isAuthenticated, user, children }: CheckAuthProps) => {
  const location = useLocation();

  // if user is not authenticated and try to access different page includes login and register then must be redirect to the login page
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("login") ||
      location.pathname.includes("register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  //   check if the user is authenticated and try to access login or register page then redirect to the shopping view or admin view page
  if (
    isAuthenticated &&
    (
      location.pathname.includes("login") ||
      location.pathname.includes("register")
    )
  ) {
    // now check the user role
    // user is adminUser --> redirect to the admin-view
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    }
    // user is normalUser --> redirect to the shopping-view
    else {
      return <Navigate to="/shop/home" />;
    }
  }

  //   check if user is authenticated and user is normal user and try to access admin view must be redirected to the shopping-view
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  //   check if the user is admin user and try to access shoping view then must be redirect to the shopping view
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
};

export default CheckAuth;
