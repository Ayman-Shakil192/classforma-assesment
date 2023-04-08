import React, { useState, useEffect } from "react";
import axios from "axios";
import "../SideBar/SideBar.css";

const apiUrl = "https://64307b10d4518cfb0e50e555.mockapi.io/modules";

const SideBar = () => {
  const [modules, setModules] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const limit = 5;
    axios
      .get(`${apiUrl}?page=${page}&limit=${limit}`)
      .then((response) => {
        setModules(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <aside>
      <div className="module_data_container">
        <div className="data_list">
          {modules.map((module) => (
            <div className="module_data" key={module.id}>
              <div className="dnd_input">{module.input_type.toUpperCase()}</div>
              <div
                className="module_name"
                onDragStart={(event) => onDragStart(event, "input")}
                draggable
              >
                <div>{module.name}</div>
              </div>
              <div className="dnd_output">
                {module.output_type.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
        <div className="pagination-container">
          <div className="pagination">
            <button
              className="pagination_button"
              onClick={handlePrevPage}
              disabled={page === 1}
            >
              {"<"}{" "}
            </button>
            <span className="pagination_page">Page {page} of 20</span>
            <button
              className="pagination_button"
              onClick={handleNextPage}
              disabled={page === 20}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
