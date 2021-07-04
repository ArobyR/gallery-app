import React from "react";
import Cards from "./Cards";

const Container = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 container-fluid border">
        <Cards />
    </div>
  );
};

export default Container;
