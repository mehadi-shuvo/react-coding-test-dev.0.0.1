import React, { useState } from "react";

const Problem2 = () => {
  const [showAllModal, setShowAllModal] = useState("");
  console.log(showAllModal);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={() => setShowAllModal("all")}
          >
            All Contacts
          </button>
          <button className="btn btn-lg btn-outline-warning" type="button">
            US Contacts
          </button>
        </div>
      </div>

      <div className={`${showAllModal ? "d-block" : "d-none"} z-1 bg`}>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Problem2;
