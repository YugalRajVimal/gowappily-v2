"use client";

// src/context/AuthContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

// -----------------------------
// Types
// -----------------------------
interface Credentials {
  email?: string;
  password?: string;
  [key: string]: any; // for otp, reset password, etc.
}

interface CustomerAuthContextType {
  verifyCustomerAuth: () => Promise<boolean>;
  setIsCustomerAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  isCustomerAuthenticated: boolean;
  login: (credentials: Credentials) => Promise<AxiosResponse | false>;
  signup: (credentials: Credentials) => Promise<AxiosResponse | false>;
  logout: () => void;
  otpVerification: (credentials: Credentials) => Promise<boolean>;
  forgetPassword: (credentials: Credentials) => Promise<AxiosResponse | false>;
}

interface AuthProviderProps {
  children: ReactNode;
}

// -----------------------------
// Context
// -----------------------------
export const CustomerAuthContext = createContext<
  CustomerAuthContextType | undefined
>(undefined);

// -----------------------------
// Provider
// -----------------------------
export const CustomerAuthProvider = ({ children }: AuthProviderProps) => {
  const [isCustomerAuthenticated, setIsCustomerAuthenticated] = useState(true);

  const verifyCustomerAuth = async (): Promise<boolean> => {
    const token = localStorage.getItem("customer-token");
    if (token) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/customer/auth`,
          {},
          { headers: { Authorization: `${token}` } }
        );
        if (response.status === 200) {
          setIsCustomerAuthenticated(true);
          return true;
        }
        setIsCustomerAuthenticated(false);
        return false;
      } catch (error) {
        setIsCustomerAuthenticated(false);
        console.error("Failed to validate token", error);
      }
    }
    return false;
  };

  const forgetPassword = async (
    credentials: Credentials
  ): Promise<AxiosResponse | false> => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/customer/reset-password`,
        credentials
      );
      toast.success(response?.data?.message);
      return response;
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
      return false;
    }
  };

  const otpVerification = async (
    credentials: Credentials
  ): Promise<boolean> => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/customer/verify-account`,
        credentials
      );
      toast.success(response?.data?.message);
      localStorage.setItem("customer-token", response?.data?.token);
      setIsCustomerAuthenticated(true);
      return true;
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
      return false;
    }
  };

  const login = async (
    credentials: Credentials
  ): Promise<AxiosResponse | false> => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/customer/signin`,
        {
          email: credentials?.email,
          password: credentials?.password,
        }
      );
      if (response?.status === 200) {
        toast.success("Login successfully");
        setIsCustomerAuthenticated(true);
        localStorage.setItem("customer-token", response?.data?.token);
        return response;
      } else if (response?.status === 401) {
        toast.error("Invalid credentials. Please try again.");
        return false;
      } else {
        toast.error("Login failed. Please try again.");
        return false;
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
      return false;
    }
  };

  const signup = async (
    credentials: Credentials
  ): Promise<AxiosResponse | false> => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/customer/signup`,
        credentials
      );
      if (response?.status === 201) {
        toast.success(response?.data?.message);
        return response;
      } else if (response?.status === 409) {
        console.log("-----");
        toast.error(response?.data?.message);
        return false;
      } else {
        toast.error("Sign up failed. Please try again.");
        return false;
      }
    } catch (err: any) {
      if (err?.response?.status === 409) {
        toast.error(err?.response?.data?.message);
        return false;
      }
      toast.error(err?.response?.data?.message);
      return false;
    }
  };

  const logout = () => {
    setIsCustomerAuthenticated(false);
    localStorage.removeItem("customer-token");
    toast.error("Logout successfully");
  };

  return (
    <CustomerAuthContext.Provider
      value={{
        verifyCustomerAuth,
        setIsCustomerAuthenticated,
        isCustomerAuthenticated,
        login,
        signup,
        logout,
        otpVerification,
        forgetPassword,
      }}
    >
      {children}
    </CustomerAuthContext.Provider>
  );
};

// -----------------------------
// Hook
// -----------------------------
export const useCustomerAuth = (): CustomerAuthContextType => {
  const context = useContext(CustomerAuthContext);
  if (!context) {
    throw new Error(
      "useCustomerAuth must be used within a CustomerAuthProvider"
    );
  }
  return context;
};
