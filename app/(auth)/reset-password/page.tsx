"use client";

import Link from "next/link";
import { useCustomerAuth } from "../../../context/CustomerAuthContext";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const router = useRouter();
  const { forgetPassword } = useCustomerAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      toast.error("Please enter your email and password.");
      return;
    }

    try {
      const response = await forgetPassword({ email, password });
      if (response) {
        // toast.success("OTP sent to your email");
        // ✅ Next.js router replace
        router.push(`/verify-otp?email=${email}`);
      } else {
        console.error("Failed to send password reset link.");
        toast.error("Failed to send password reset link.");
      }
    } catch (error) {
      console.error("Error sending password reset link", error);
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] dark:bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[linear-gradient(to_right,var(--color-gray-800),var(--color-indigo-800),var(--color-gray-50),var(--color-indigo-900),var(--color-gray-800))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Reset your password
            </h1>
          </div>
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="mx-auto max-w-[400px]">
            <div>
              <label
                className="mb-1 block text-sm font-medium text-indigo-200/65"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input w-full"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label
                className="mb-1 block text-sm font-medium text-indigo-200/65"
                htmlFor="password"
              >
                New Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="form-input w-full"
                placeholder="Enter new password"
                required
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
