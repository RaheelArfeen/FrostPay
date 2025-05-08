import { useEffect } from "react";
import { useLocation } from "react-router";

const routeTitles = {
  "/": "Home | FrostPay",
  "/bills": "Bills | FrostPay",
  "/profile": "Profile | FrostPay",
  "/add-balance": "Add Balance | FrostPay",
  "/update-profile": "Updata Profile | FrostPay",
  "/login": "Login | FrostPay",
  "/register": "Register | FrostPay",

};

const TitleManager = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.startsWith("/bills/:id")
      ? "/bills/:id"
      : location.pathname;

    const title = routeTitles[path] || "FrostPay";
    document.title = title;
  }, [location]);

  return null;
};

export default TitleManager;
