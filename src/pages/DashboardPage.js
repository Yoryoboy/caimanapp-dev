// src/pages/DashboardPage.js
import React from "react";
import Header from "../components/Header";
import "./DashboardPage.css";
import SearchBar from "../components/SearchBar";
import { CreateMatchSection } from "../components/CreateMatchSection";
import { FriendGroupSection } from "../components/FriendGroupSection";

function DashboardPage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <CreateMatchSection />
      <FriendGroupSection />

      {/* 
      <section>friends - groups</section>
      <section>upcoming matches</section>
      <section>recent activities</section> */}
    </div>
  );
}

export default DashboardPage;
