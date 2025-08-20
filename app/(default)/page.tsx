export const metadata = {
  title: "GoWappily",
  description: "",
};

import { CustomerAuthProvider } from "@/context/CustomerAuthContext";
import CustomerProtectedRoute from "@/ProtectedRoutes/CustomerProtectedRoute";

import HomeClient from "./HomeClient";

export default function Home() {
  return (
    <>
      <CustomerAuthProvider>
        <CustomerProtectedRoute>
          <HomeClient />
        </CustomerProtectedRoute>
      </CustomerAuthProvider>
    </>
  );
}
