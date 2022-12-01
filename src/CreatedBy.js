import React from "react";
import "./CreatedBy.css";

function CreatedBy() {
  return (
    <div id="createdByBar">
      <div id="createdByText">
        <p>Created By: Natalie Salazar</p>
        <a href="https://github.com/natmsal33" style={{ color: "white" }}>
          {" "}
          Github
        </a>
      </div>
    </div>
  );
}

export default CreatedBy;
