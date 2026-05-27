import React from "react";

function Hero() {
  return (
    <div className="support-wrapper py-5">
  <div className="container">

    <div className="d-flex justify-content-between align-items-center">
      <h1 className="fw-bold fs-1">Support Portal</h1>
      <button className="btn btn-primary">My tickets</button>
    </div>

    <div className="mt-4">
      <div className="input-group">
        <span className="input-group-text mt-3">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          type="text"
          className="form-control fs-3 mt-3"
          placeholder="Eg: How do I open my account..."
        />
      </div>
    </div>

  </div>
</div>
  );
}

export default Hero;