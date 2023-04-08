import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./components/Table/Table";
import WorkFlow from "./components/WorkFlow/WorkFlow";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Table />} />
        <Route path="/:id" element={<WorkFlow />} />
      </Routes>
    </Router>
  );
};

export default App;
