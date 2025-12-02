// src/context/AuthContext.js
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const FarmerContext = createContext();

export const FarmerProvider = ({ children }) => {
  const addUpcomingHarvest = async (harvestDetails) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/farmer/addUpcomingHarvest`,
        harvestDetails,
        {
          headers: {
            Authorization: `${localStorage.getItem("farmer-token")}`,
          },
        }
      );
      switch (response.status) {
        case 201:
          toast.success("Upcoming harvest added successfully.");
          return true;
        case 400:
          toast.error("Please fill all required fields.");
          return false;
        case 404:
          toast.error("Farmer not found.");
          return false;
        case 500:
          toast.error("Internal server error.");
          return false;
        default:
          toast.error("Failed to add upcoming harvest.");
          return false;
      }
    } catch (error) {
      console.error("Failed to add upcoming harvest", error);
      toast.error("Failed to add upcoming harvest.");
      return false;
    }
  };
  return (
    <FarmerContext.Provider value={{ addUpcomingHarvest }}>
      {children}
    </FarmerContext.Provider>
  );
};

export const useFarmer = () => useContext(FarmerContext);
