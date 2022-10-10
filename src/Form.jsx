import React from "react";
import { useForm } from "react-hook-form";
import "./assets/form.css";

const Form = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-form justify-content-center align-items-center pt-5 pb-2 px-3 mx-5 "
      >
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
                id="godfather-name"
                {...register(
                  "godfatherName",
                  { required: true },
                  {
                    maxLength: {
                      value: 50,
                    },
                  },
                  {
                    pattern: {
                      value: /^[A-Za-z]+$/,
                    },
                  }
                )}
                aria-invalid={errors.parrainName ? "true" : "false"}
              />
              {errors.godfatherName?.type === "required" && (
                <p role="alert" style={{ color: "#ff0033" }}>
                  Godfather's name is required
                </p>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <label>
              <i className="text-secondary">TELEPHONE FILLEUL *</i>
            </label>
            <div className="form-input mb-2">
              <input
                type="text"
                placeholder=""
                className="my-1"
                id="godson-number"
                {...register(
                  "godsonNumber",
                  { required: true },
                  {
                    minLength: {
                      value: 10,
                    },
                  },
                  {
                    maxLength: {
                      value: 10,
                    },
                  },
                  {
                    pattern: {
                      value: /^\d{3}-\d{3}-\d{4}$/,
                    },
                  }
                )}
              />
              {errors.godsonNumber?.type === "required" && (
                <p role="alert" style={{ color: "#ff0033" }}>
                  Godsons's number is required
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>
              {/* 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨 */}

              <i className="text-secondary">EMAIL PARRAIN</i>  

              {/* 🚨 ATTENTION 🚨 , dans les consignes, l'email du parrain est noté comme champ obligatoire mais dans les maquettes 
              le champ n'est pas mentionné comme obligatoire ( avec une astérisque ) */}

              {/* 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨 */}


            </label>
            <div className="form-input mb-2">
              <input
                type="text"
                placeholder=""
                className="my-1"
                id="godfather-email"
                {...register(
                  "godfatherEmail",
                  { required: true },
                  {
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    },
                  }
                )}
              />
              {errors.godfatherEmail?.type === "required" && (
                <p role="alert" style={{ color: "#ff0033" }}>
                  This field demands a correct email syntax
                </p>
              )}
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
                id="godson-name"
                {...register(
                  "godsonName",
                  { required: true },
                  { maxLength: 50 },
                  { pattern: { value: /^[A-Za-z]+$/ } }
                )}
              />
              {errors.godsonName?.type === "required" && (
                <p role="alert" style={{ color: "#ff0033" }}>
                  Godson's name is required
                </p>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button className="my-3 px-5 py-1" type="submit">
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
