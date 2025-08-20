"use client";

import { useContext, useEffect, useState } from "react";
import { useCustomerAuth } from "../context/CustomerAuthContext";

interface CustomerProtectedRouteProps {
  children: React.ReactNode;
}

const CustomerProtectedRoute: React.FC<CustomerProtectedRouteProps> = ({
  children,
}) => {
  const {
    verifyCustomerAuth,
    isCustomerAuthenticated,
    setIsCustomerAuthenticated,
  } = useCustomerAuth();
  const [isAuthChecked, setIsAuthChecked] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await verifyCustomerAuth();
      setIsAuthChecked(true);
      setIsCustomerAuthenticated(res);
      console.log(res);
    };
    checkAuth();
  }, [verifyCustomerAuth]);

  // if (!isAuthChecked) {
  //   return <div>Loading....</div>; // or show a loader component if you have one
  // }

  return children;
};

export default CustomerProtectedRoute;
