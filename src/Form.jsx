import React  from "react";
import "./assets/form.css";

const Form = () => {


  // function parrainInputHandler() {
  //   const parrainInput = document.getElementById("parrain-input");
  //   if (parrainInput.value > 50) {
  //     alert.log("This input should contain less than 50 character");
  //   }
  //   if (parrainInput.value === "") {
  //     alert.log("This input cannot be empty, please insert the correct value");
  //   }
  // }

  // function inputChecker() {
  //   const filleulInput = getElementById(filleul-number-input);
  //   const emailParrainInput = getElementById(email-parrain-input);
  //   const filleulNameInput = getElementById(filleulName-input);

  //   const inputList = ["parrainInput", "filleulInput", "emailParrainInput", "filleulNameInput"];

  //   const [inputColor, setInputColor] = useState("black");
  //   return(
  //     <>
  //     <input style={ { color: setInputColor } }></input>
  //     </>
  //   )

  return (
    <>
      <div className="bg-form justify-content-center align-items-center pt-5 pb-2 px-3 mx-5">
        <h3 className="text-center mb-3">Formulaire de parrainage</h3>
        <div className="row">
          <div className="col-md-6">
            <label>
              <i className="text-secondary">NOM PARRAIN *</i>
            </label>
            <div className="form-input mb-2">
              <input
                type="text"
                placeholder=""
                className="my-1"
                id="parrain-input"
              />
            </div>
          </div>
          <div className="col-md-6">
            <label>
              <i className="text-secondary">TELEPHONE FILEUL *</i>
            </label>
            <div className="form-input mb-2">
              <input
                type="text"
                placeholder=""
                className="my-1"
                id="filleul-number-input"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>
              <i className="text-secondary">EMAIL PARRAIN</i>
            </label>
            <div className="form-input mb-2">
              <input
                type="text"
                placeholder=""
                className="my-1"
                id="email-parrain-input"
              />
            </div>
          </div>
          <div className="col-md-6">
            <label>
              <i className="text-secondary">NOM FILLEUL *</i>
            </label>
            <div className="form-input mb-2">
              <input
                type="text"
                placeholder=""
                className="my-1"
                id="filleulName-input"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button className="my-3 px-5 py-1">ENVOYER</button>
          </div>
          <p className="text-secondary ms-4">
            <i>* Champs obligatoires</i>
          </p>
        </div>
      </div>
    </>
  );
};

export default Form;
