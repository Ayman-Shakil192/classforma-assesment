import React, { useState, useEffect, useCallback } from "react";
import "./Modules.css";
import SideBar from "../SideBar/SideBar";
import Flow from "../Flow/Flow";

const Modules = () => {
  return (
    <>
      <div className="modules_canvas_container">
        <div className="modules_container">
          <div className="title">Modules</div>
          <SideBar />
        </div>
        <Flow />
      </div>
    </>
  );
};

export default Modules;
