import React from "react";

const About = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col">
        <img
          src="https://www.shutterstock.com/image-photo/monopod-smartphone-camera-on-wooden-600w-1919096783.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div className="text-center">
          <h1 className="text-5xl font-bold">Gadget News!</h1>
          <p className="py-6 w-1/2 mx-auto">
            Gadget Grabber (Online buying and selling site) Submitted by: Pranta
            Banik ID: 191-35-2752 Department of Software Engineering Daffodil
            International University Supervised by Ms. Tapushe Rabaya Toma
            Lecturer (Senior Scale) Faculty of Science & Information Technology
            Department of Software Engineering Daffodil International University
            Fall- 2022
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
