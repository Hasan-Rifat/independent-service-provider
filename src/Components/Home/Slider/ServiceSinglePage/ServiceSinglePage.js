import React from "react";
import { useParams } from "react-router-dom";

const ServiceSinglePage = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>welcome {serviceId}</h2>
    </div>
  );
};

export default ServiceSinglePage;
