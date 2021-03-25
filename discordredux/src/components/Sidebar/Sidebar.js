import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
  return (
    <div className="Sidebar">
      <h2>I AM THE SIDEBAR </h2>

      <div className="div sidebar__top">
        <h3>Discord Clone</h3>
        <ExpandMoreIcon />
      </div>
    </div>
  );
}

export default Sidebar;
