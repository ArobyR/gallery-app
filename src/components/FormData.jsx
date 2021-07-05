import React from "react";
import PropTypes from "prop-types";

const FormData = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="w-100">
        <label htmlFor="inputText" className="m-4 w-50">
          {" "}
          Buscar:
          <input type="text" name="inputText" className="w-100" />
        </label>
        <button className="btn btn-dark" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

FormData.propTypes = {
  handleSubmit: PropTypes.func,
};

export default FormData;
