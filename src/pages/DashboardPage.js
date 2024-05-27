// src/pages/DashboardPage.js
import React from "react";
import Header from "../components/Header";
import "./DashboardPage.css";
import SearchBar from "../components/SearchBar";
import { CreateMatchSection } from "../components/CreateMatchSection";

function DashboardPage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <CreateMatchSection />

      {/* 
      <section>friends - groups</section>
      <section>upcoming matches</section>
      <section>recent activities</section> */}
    </div>
  );
}

export default DashboardPage;
