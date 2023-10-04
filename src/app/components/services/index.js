import React from "react";

const Services = () => {
  return (
    <div className="text" id="text">
      <h2>Check Out Our Services</h2>
      <div className="card-grid">
        <div className="card">
          <img src={"/assets/banner2.jpg"} alt="Service 01" height="100" />
          <h4>Service 01</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            corrupti aspernatur nihil, tenetur tempora labore!
          </p>
        </div>
        <div className="card">
          <img src={"/assets/banner2.jpg"} alt="Service 02" height="100" />
          <h4>Service 02</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            corrupti aspernatur nihil, tenetur tempora labore!
          </p>
        </div>
        <div className="card">
          <img src={"/assets/banner2.jpg"} alt="Service 03" height="100" />
          <h4>Service 03</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            corrupti aspernatur nihil, tenetur tempora labore!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
