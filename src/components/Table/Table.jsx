import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Table.css";

const apiUrl = "https://64307b10d4518cfb0e50e555.mockapi.io/workflow";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <nav>Workflows</nav>
      <div className="workflow_data">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Input Type</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={`${item.id}_${index}`}>
                <td className="name">
                  <Link to={`/${item.id}`} className="link">
                    {item.name}
                  </Link>
                </td>
                <td>{item.input_type.toUpperCase()}</td>
                <td>{item.createdAt.substring(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
