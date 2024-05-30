// src/pages/DashboardPage.js
import React from "react";
import Header from "../components/Header";
import "./DashboardPage.css";
import SearchBar from "../components/SearchBar";
import CreateMatchSection from "../components/CreateMatchSection";
import FriendGroupSection from "../components/FriendGroupSection";
import UpcomingMatches from "../components/UpcomingMatches";
import { RecentActivities } from "../components/RecentActivities";

function DashboardPage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <CreateMatchSection />
      <FriendGroupSection />
      <UpcomingMatches />
      <RecentActivities />
    </div>
  );
}

export default DashboardPage;
