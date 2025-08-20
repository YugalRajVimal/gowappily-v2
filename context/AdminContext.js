// src/context/AuthContext.js
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const handleOnboardingFarmer = async (farmerData, resetForm) => {
    try {
      const token = localStorage.getItem("admin-token");
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/admin/onboard-farmer`,
        farmerData,
        { headers: { Authorization: `${token}` } }
      );

      if (res.status === 201) {
        toast.success("Farmer onboarded successfully!");
        if (resetForm) resetForm(); // optional: to reset the form after successful submission
      } else {
        toast.error(res.data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Onboarding Error:", error);
      toast.error(
        error?.response?.data?.message || "Failed to onboard farmer!"
      );
    }
  };
  const getUpcomingHarvests = async () => {
    try {
      const token = localStorage.getItem("admin-token");
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/admin/upcoming-harvests`,
        { headers: { Authorization: `${token}` } }
      );

      if (res.status === 200) {
        return res.data.harvests;
      } else if (res.status === 500) {
        toast.error("Internal Server Error: Please try again later.");
      } else {
        toast.error(res.data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Fetch Upcoming Harvests Error:", error);
      toast.error(
        error?.response?.data?.message || "Failed to fetch upcoming harvests!"
      );
    }
  };

  const acceptAndAddToInventory = async (transactionData) => {
    try {
      const token = localStorage.getItem("admin-token");
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/admin/accept-and-add-to-inventory`,
        transactionData,
        { headers: { Authorization: `${token}` } }
      );

      if (res.status === 200) {
        toast.success("Harvest accepted and added to inventory successfully!");
      } else {
        toast.error(res.data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Accept and Add to Inventory Error:", error);
      toast.error(
        error?.response?.data?.message ||
          "Failed to accept and add to inventory!"
      );
    }
  };

  const getMainInventoryDetails = async () => {
    try {
      const token = localStorage.getItem("admin-token");
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/admin/get-main-inventory-details`,
        { headers: { Authorization: `${token}` } }
      );

      if (res.status === 200) {
        return res.data;
      } else {
        toast.error(res.data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Fetch Main Inventory Details Error:", error);
      toast.error(
        error?.response?.data?.message ||
          "Failed to fetch main inventory details!"
      );
    }
  };

  const processSeedsToMakhana = async (
    seedType,
    location,
    quantityProcessed,
    quantityProduced
  ) => {
    try {
      const token = localStorage.getItem("admin-token");
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/admin/process-seeds-to-makhana`,
        { seedType, location, quantityProcessed, quantityProduced },
        { headers: { Authorization: `${token}` } }
      );

      if (res.status === 200) {
        toast.success("Seeds processed to Makhana successfully!");
      } else {
        toast.error(res.data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Process Seeds to Makhana Error:", error);
      toast.error(
        error?.response?.data?.message || "Failed to process seeds to Makhana!"
      );
    }
  };

  const getProcessedSeedToMakhanaInventoryDetails = async () => {
    try {
      const token = localStorage.getItem("admin-token");
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/admin/get-processed-seed-to-makhana-inventory-details`,
        { headers: { Authorization: `${token}` } }
      );

      if (res.status === 200) {
        return res.data;
      } else {
        toast.error(res.data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(
        "Fetch Processed Seed to Makhana Inventory Details Error:",
        error
      );
      toast.error(
        error?.response?.data?.message ||
          "Failed to fetch processed seed to Makhana inventory details!"
      );
    }
  };

  return (
    <AdminContext.Provider
      value={{
        handleOnboardingFarmer,
        getUpcomingHarvests,
        acceptAndAddToInventory,
        getMainInventoryDetails,
        processSeedsToMakhana,
        getProcessedSeedToMakhanaInventoryDetails
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
