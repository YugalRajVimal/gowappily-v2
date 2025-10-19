"use client";

import React, { useState } from "react";

import { FiSend } from "react-icons/fi";
import {
  MdOutlineMail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";

const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("India (+91)");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate fields
    if (!fullName || !email || !phone || !company || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simple phone number validation (assuming it should be numeric and of a certain length)
    if (!/^\d+$/.test(phone) || phone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }
    e.preventDefault();
    const whatsappMessage = `I would like to connect with you. This is my contact information:\n\nName: ${fullName}\nCompany: ${company}\nEmail: ${email}\nPhone: ${countryCode} ${phone}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/+918800592770?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const contactInfo = {
    email: "info@gowappily.com",
    phone: "+918800592770",
    phone2: "+916398960435",
    location: {
      address1: "G13, sector 6, Noida, 201301",
    },
  };

  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
          <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
            GoWappily Infotech
          </span>
        </div>
        <div className="text-center mb-16">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-serif font-semibold text-transparent md:text-5xl">
            Contact US
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-danger mb-4 font-montserrat">
                Get in Touch
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 tracking-tight">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-light font-roboto mb-8">
                Whether you have a project in mind or just want to explore
                possibilities, we're here to help. Fill out the form, and one of
                our team members will get back to you shortly.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-neutral-800 border border-danger/50 px-4 py-2 rounded-md focus:outline-none hover:bg-neutral-700 transition duration-300"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-neutral-800 border border-danger/50 px-4 py-2 rounded-md focus:outline-none hover:bg-neutral-700 transition duration-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-[150px_1fr] gap-6">
                  <div>
                    <label className="block mb-2 font-semibold">
                      Phone Number
                    </label>
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="w-full bg-neutral-800 border border-danger/50 px-4 py-2 rounded-md hover:bg-neutral-700 transition duration-300"
                    >
                      <option value="+91">India (+91)</option>
                      <option value="+1">USA (+1)</option>
                      <option value="+44">UK (+44)</option>
                      <option value="+61">Australia (+61)</option>
                      <option value="+81">Japan (+81)</option>
                      <option value="+49">Germany (+49)</option>
                      <option value="+33">France (+33)</option>
                      <option value="+39">Italy (+39)</option>
                      <option value="+34">Spain (+34)</option>
                      <option value="+55">Brazil (+55)</option>
                      <option value="+7">Russia (+7)</option>
                      <option value="+27">South Africa (+27)</option>
                      <option value="+86">China (+86)</option>
                      <option value="+82">South Korea (+82)</option>
                      <option value="+65">Singapore (+65)</option>
                      <option value="+63">Philippines (+63)</option>
                    </select>
                  </div>
                  <div className="pt-7 md:pt-[32px]">
                    <input
                      type="text"
                      placeholder="12345 67890"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-neutral-800 border border-danger/50 px-4 py-2 rounded-md focus:outline-none hover:bg-neutral-700 transition duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-semibold">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company / Brand"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-neutral-800 border border-danger/50 px-4 py-2 rounded-md focus:outline-none hover:bg-neutral-700 transition duration-300"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-neutral-800 border border-danger/50 px-4 py-2 rounded-md focus:outline-none resize-none hover:bg-neutral-700 transition duration-300"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 flex items-center justify-center gap-5 border border-white text-white hover:bg-white hover:text-black px-5 py-2 rounded-md transition-all duration-300"
                >
                  <FiSend size={15} />
                  <span className="font-semibold text-sm">Send Message</span>
                </button>
              </form>
            </div>

            <div className="bg-black text rounded-lg border border-danger/20 shadow-gold p-8 md:p-12">
              <h3 className="text-2xl font-bold font-montserrat mb-8 tracking-tight">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex flex-col items-start">
                  <div className="flex items-start mb-4">
                    <MdOutlineMail className="w-6 h-6 text-danger mr-4" />
                    <div>
                      <h4 className="font-semibold font-montserrat mb-1">
                        Email
                      </h4>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-gray-light font-roboto transition hover:text-indigo-500 hover:text-danger transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start mb-4">
                    <MdOutlinePhone className="w-6 h-6 text-danger mr-4" />
                    <div>
                      <h4 className="font-semibold font-montserrat mb-1">
                        Phone
                      </h4>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-gray-light font-robot transition hover:text-indigo-500 hover:text-danger transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                      <br />
                      <a
                        href={`tel:${contactInfo.phone2}`}
                        className="text-gray-light font-roboto transition hover:text-indigo-500 hover:text-danger transition-colors"
                      >
                        {contactInfo.phone2}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start mb-4">
                    <MdOutlineLocationOn className="w-6 h-6 text-danger mr-4" />
                    <div>
                      <h4 className="font-semibold font-montserrat mb-1">
                        Locations
                      </h4>
                      <p className="text-gray-light font-roboto">
                        {contactInfo.location.address1}
                      </p>
                      {/* Uncomment if needed
                        <p className="text-gray-light font-roboto">
                          {contactInfo.location.address2}
                        </p>
                        */}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href="https://www.facebook.com/share/1JDm8fcyz7/?mibextid=wwXIfr"
                      className="text-indigo-200/65 transition hover:text-indigo-500"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/gowappily_infotech?igsh=YnA2MW41anhubjY2&utm_source=qr"
                      className="text-indigo-200/65 transition hover:text-indigo-500"
                    >
                      Instagram
                    </a>
                    {/* <a href="https://linkedin.com" className="text-indigo-200/65 transition hover:text-indigo-500">LinkedIn</a> */}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold font-montserrat mb-2">
                    Working Hours
                  </h4>
                  <p className="text-gray-light font-roboto">
                    Monday to Friday: 10:00 AM - 10:00 PM
                    <br />
                    Saturday: Off
                    <br />
                    Sunday: Off
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 bg-black-theme-poor">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 tracking-tight text-white-theme-pure">
              Visit Our <span className="shadow-text">Office</span>
            </h2>
          </div>

          <div className="overflow-hidden rounded-lg border border-gold-accent/30 shadow-gold">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.123898194189!2d77.31833771134636!3d28.5960596856341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f07f856ea3%3A0x16842c36e33733ca!2sBlock%20G%2C%20G13%2C%20G%20Block%2C%20Sector%206%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1756104655477!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactUs;
