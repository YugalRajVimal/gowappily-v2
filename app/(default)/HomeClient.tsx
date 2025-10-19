"use client";

import { useState, useEffect } from "react";

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Services from "@/components/services";
import BenefitsSection from "@/components/benefit-section";
import StatsSection from "@/components/stats-section";
import LoadingScreen from "@/components/ui/loading-screen";
import PlansSection from "@/components/tier-plans";
import TerminalPreloader from "@/components/ui/terminal-loader";
import Head from "next/head";

import { useCustomerAuth } from "@/context/CustomerAuthContext";
import TrustedBy from "@/components/TrustedBy";

export default function HomeClient() {
  const [loading, setLoading] = useState(true);
  const { isCustomerAuthenticated } = useCustomerAuth();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  // if (loading && !isCustomerAuthenticated) return <TerminalPreloader />;

  return (
    <>
      <Head>
        <title>GoWappily</title> {/* Browser tab text */}
        <link rel="icon" href="/favicon.ico" /> {/* Favicon */}
      </Head>
      <PageIllustration />
      <Hero />
      <Workflows />
      <TrustedBy />
      <Services />
      {/* <PlansSection /> */}
      <BenefitsSection />
      <StatsSection />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
