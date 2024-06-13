// src/pages/DashboardPage.js
import React from "react";
import Header from "../components/Header";
import "./DashboardPage.css";
import SearchBar from "../components/SearchBar";
import CreateMatchSection from "../components/CreateMatchSection";
import FriendGroupSection from "../components/FriendGroupSection";
import UpcomingMatches from "../components/UpcomingMatches";
import { RecentActivities } from "../components/RecentActivities";

const buttons = [
  {
    backgroundColor: "#3C2E5A",
    width: "100%",
    color: "#FAFAFA",
    border: "1px solid #D8756E",
    label: "Ver más",
    onClick: () => alert("Ver más"),
  },
  {
    backgroundColor: "linear-gradient(95.57deg, #DD8272 44.54%, #D8756E 60.7%)",
    width: "100%",
    color: "#FAFAFA",
    label: "Anotarme",
    onClick: () => alert("Anotarme"),
  },
];

function DashboardPage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <CreateMatchSection />
      <FriendGroupSection />
      <UpcomingMatches buttons={buttons} />
      <RecentActivities />
    </div>
  );
}

export default DashboardPage;
