"use client";

import PageIllustration from "@/components/page-illustration";
import { CustomerAuthProvider } from "@/context/CustomerAuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CustomerAuthProvider>
        <main className="relative flex grow flex-col">
          <PageIllustration multiple />

          {children}
        </main>
      </CustomerAuthProvider>
      {/* Toast container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}
