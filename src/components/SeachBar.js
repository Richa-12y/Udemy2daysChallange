import React, { useState } from "react";

const SeachBar = (props) => {
  const { onSubmit } = props;
  const [term, setTerm] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input value={term} onChange={handleChange} />
    </form>
  );
};

export default SeachBar;
