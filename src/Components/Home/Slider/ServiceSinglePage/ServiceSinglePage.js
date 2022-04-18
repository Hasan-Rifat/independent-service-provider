import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckOut from "../../../CheckOut/CheckOut";

const ServiceSinglePage = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <h2>welcome {serviceId}</h2>
      <div className="row">
        {services.map((service) => (
          <CheckOut service={service} key={service.id}></CheckOut>
        ))}
      </div>
    </div>
  );
};

export default ServiceSinglePage;
