import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modules from "../Modules/Modules";
import "../WorkFlow/WorkFlow.css";

function Detail() {
  const { id } = useParams();
  const [workflow, setWorkflow] = useState(null);

  useEffect(() => {
    axios
      .get(`https://64307b10d4518cfb0e50e555.mockapi.io/workflow/${id}`)
      .then((response) => setWorkflow(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!workflow) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <div className="loading-text">Fetching Modules...</div>
      </div>
    );
  }

  const name = workflow.name;

  return (
    <div>
      <nav className="workflow-name">Wokflow name : {name}</nav>
      <Modules />
    </div>
  );
}

export default Detail;
