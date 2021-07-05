import React from "react";

const Card = (props) => {
  const { description } = props;

  return (
    <div className="col">
      <div className="card m-4" style={{ width: "18rem"}}>
        <img src={props.image} style={{ width: "18rem", maxHeight: "15rem"}} alt="png" className="card-img-top" />
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
