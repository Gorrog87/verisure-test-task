import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./assets/form.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form className="bg-form justify-content-center align-items-center pt-5 pb-2 px-3 mx-5 ">
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
                {...{
                  required: true,
                  minLength: {
                    value: 1,
                    message: "This field can't be less than 1 character",
                  },
                  maxLength: {
                    value: 50,
                    message: "This input accepts 50 characters max",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "This field accpets only alphabetical characters",
                  },
                }}
              />
              {errors.pattern?.type === 'required' && <p role="alert">NOM PARRAIN is required in this field</p>}
              {/* {errors.exampleRequired && <span>This field is required</span>} */}
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
                {...{
                  required: true,
                  maxLength: {
                    value: 10,
                    message: "Only 10 numbers are accpeted in this field",
                  },
                  pattern: {
                    value: /^\d{3}-\d{3}-\d{4}$/,
                    message: "This field accepts only numbers",
                  },
                }}
              />
              {errors.exampleRequired && <span>This field is required</span>}
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
                {...{
                  required: false,
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "This field demands a correct email syntax",
                  },
                }}
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
                {...{
                  required: true,
                  minLength: { value: 1 },
                  maxLength: {
                    value: 50,
                    message: "This input accepts 50 characters max",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "This field accpets only alphabetical characters",
                  },
                }}
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              onClick={handleSubmit(onSubmit)}
              className="my-3 px-5 py-1"
              type={"submit"}
            >
              ENVOYER
            </button>
          </div>
          <p className="text-secondary ms-4">
            <i>* Champs obligatoires</i>
          </p>
        </div>
      </form>
    </>
  );
};

export default Form;
