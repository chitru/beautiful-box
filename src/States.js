import React from "react";

const stateList = [
  ["NSW", "New South Wales"],
  ["VIC", "Victoria"],
  ["QLD", "Queensland"],
  ["NT", "Northern Terriroty"],
  ["ACT", "Australian Capital Territory"],
  ["SA", "South Australia"],
  ["TAS", "Tasmania"],
  ["WA", "Western Australia"]
];

const StatesDropdown = ({ label, ...others }) => (
  <>
    {label}
    <select {...others}>
      {stateList.map(([value, name]) => (
        <option value={value}>{name}</option>
      ))}
    </select>
  </>
);

export default StatesDropdown;
