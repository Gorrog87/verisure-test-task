import React from "react";
import "./assets/form.css";

const Form = () => {
  // let parrainInput = getElementById(parrain-input);
  // let filleulInput = getElementById(filleul-number-input);
  // let emailParrainInput = getElementById(email-parrain-input);
  // let filleulNameInput = getElementById(filleul-name-input);
  return (
    <>
      <div className="bg-form d-flex-column pt-5 pb-2 px-3 mx-5">
        <h3 className="text-center">Formulaire de parainage</h3>
        {/* <label className="text-secondary opacity">NOM PARAIN</label> */}
        <label>
          <i className="text-secondary">NOM PARRAIN *</i>
        </label>
        <input
          type="text"
          placeholder=""
          className="my-2"
          id="parrain-input"
        />
        <label>
          <i className="text-secondary">TELEPHONE FILEUL *</i>
        </label>
        <input
          type="text"
          placeholder=""
          className="my-2"
          id="filleul-number-input"
        />
        <label>
          <i className="text-secondary">EMAIL PARRAIN *</i>
        </label>
        <input
          type="text"
          placeholder=""
          className="my-2"
          id="email-parrain-input"
        />
        <label>
          <i className="text-secondary">NOM FILLEUL *</i>
        </label>
        <input
          type="text"
          placeholder=""
          className="my-2"
          id="filleul-name-input"
        />
        <label>
          <i></i>
        </label>
        <div className="d-flex justify-content-center">
          <button className="my-3 px-5 py-1">ENVOYER</button>
        </div>
        <p className="text-secondary">
          <i>* Champs obligatoires</i>
        </p>
      </div>
    </>
  );
};

export default Form;
