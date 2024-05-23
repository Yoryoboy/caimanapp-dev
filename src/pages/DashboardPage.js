// src/pages/DashboardPage.js
import React from "react";
import Header from "../components/Header";
import "./DashboardPage.css";

import SearchBar from "../components/SearchBar";

function DashboardPage() {
  return (
    <div>
      <Header />
      <SearchBar />

      {/* <section>create match</section>
      <section>friends - groups</section>
      <section>upcoming matches</section>
      <section>recent activities</section> */}
    </div>
  );
}

export default DashboardPage;
