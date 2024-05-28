// src/pages/DashboardPage.js
import React from "react";
import Header from "../components/Header";
import "./DashboardPage.css";
import SearchBar from "../components/SearchBar";
import CreateMatchSection from "../components/CreateMatchSection";
import FriendGroupSection from "../components/FriendGroupSection";
import UpocomingMatches from "../components/UpocomingMatches";

function DashboardPage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <CreateMatchSection />
      <FriendGroupSection />
      <UpocomingMatches />

      {/* 
      <section>upcoming matches</section>
      <section>recent activities</section> */}
    </div>
  );
}

export default DashboardPage;
