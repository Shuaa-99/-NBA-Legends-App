import React, { useState } from "react";
import data from "../helper/data";
import PlayerCard from "./PlayerCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import nbaLogo from "../assets/nba-logo.png";
import SearchBar from "./searchBar";
import "./CardContainer.scss";

const CardContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(""); // New

  const filteredData = data
    .filter((player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortBy) return 0;

      const getStatValue = (stats, label) => {
        const stat = stats.find((s) => s.toLowerCase().includes(label));
        return stat ? parseInt(stat.replace(/[^0-9]/g, ""), 10) : 0;
      };

      const aVal = getStatValue(a.statistics, sortBy);
      const bVal = getStatValue(b.statistics, sortBy);
      return bVal - aVal;
    });

  return (
    <div>
      <img
        src={nbaLogo}
        alt="NBA Logo"
        className="mb-4"
        style={{
          width: "150px",
          display: "block",
          margin: "0 auto",
          padding: "0 auto",
        }}
      />
      <h1 className="text-center mb-4">NBA Players</h1>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <SearchBar setSearchTerm={setSearchTerm} />
        <select
          onChange={(e) => setSortBy(e.target.value)}
          style={{ height: "3.5rem", fontSize: "1rem" }}
        >
          <option value="">Sort by</option>
          <option value="points">Points</option>
          <option value="rebaunds">Rebounds</option>
          <option value="assist">Assists</option>
          <option value="all star">All Stars</option>
        </select>
      </div>

      <Container className="card-container">
        <Row xs={1} md={2} lg={3} className="g-4 mt-4">
          {filteredData.map((player, index) => (
            <PlayerCard
              key={index}
              name={player.name}
              img={player.img}
              statistics={player.statistics}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CardContainer;
