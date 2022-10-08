import React from "react";
import "./assets/form-page.css";
import Form from "./Form";

const FormPage = () => {
  return (
    <>
      <div style={{backgroundImage: `url ("../assets/background.jpg")`}} className="d-flex">
        <Form />
      </div>
    </>
  );
};

export default FormPage;
