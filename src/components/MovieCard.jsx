import React, { useState } from "react";
import BasicRating from "./BasicRating";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Trailldesc from "./Trailldesc";

const Moviecard = ({ el, key }) => {
  const [status, setStatus] = useState(el.status);
  const [rateValue, setrateValue] = useState();

  const handleSale = () => {
    setStatus("Saled");
    return <div>{status} </div>;
  };
  const handleRate = (rate) => {
    setrateValue(rate);
  };

  return (
    <div style={{ width: "18rem" }}>
      <div className="card h-100">
        <img src={el.posterURL} className="card-img-top" alt="..." />

        <div className="card-body">
          <h2 className="card-title">Title: {el.title}</h2>
          {/* <p className="card-text">Description: {el.description}</p> */}
          <p className="card-text">Status: {status}</p>
          {status === "Available" && (
            <button className="btn btn-warning" onClick={() => handleSale()}>
              Buy?
            </button>
          )}
          <p className="card-text"></p>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">
            <BasicRating handleRate={handleRate} />
          </small>
        </div>
        <Link className="btn btn-info" to={`/trailldesc/${el.id}`}>
          See More Details!
        </Link>
      </div>
    </div>
  );
};

export default Moviecard;
