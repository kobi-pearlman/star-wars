import React from "react";

import "./vehicle.scss";

const Vehicle = ({ vehicle }) => {
  const { vehicleName, pilotsName, homeWorlds } = vehicle;
  return (
    <div className="table-container">
      <div className="title">{vehicleName}</div>
      <div className="home-world-header">
        <span>Home World Name</span>
        <span>Home World Population</span>
      </div>
      {homeWorlds.map((homeWorld, i) => (
        <div key={i} className="home-world">
          <div>{homeWorld.name}</div>
          <div>{homeWorld.population}</div>
        </div>
      ))}
      <div className="pilots">
        <span>Pilots:</span>
        {pilotsName.map((name, i) => (
          <div key={i}>{name}</div>
        ))}
      </div>
    </div>
  );
};

export default Vehicle;
