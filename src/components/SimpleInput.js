import React, { useState } from "react";
import Loader from "react-loader-spinner";

const SimpleInput = () => {
  const [enteredValue, setEnteredValue] = useState({
    enteredName: "",
    enteredEmail: "",
    enteredContact: "",
    enteredAddress: "",
  });

  const { enteredName, enteredEmail, enteredContact, enteredAddress } =
    enteredValue;

  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [enteredContactIsValid, setEnteredContactIsValid] = useState(true);
  const [entertedAddressIsValid, setEnteredAddressIsValid] = useState(true);

  const [alert, setAlert] = useState(true);

  const [showLoader, setShowLoader] = useState(true);

  const onInputChangeHandler = (e) => {
    setEnteredValue({ ...enteredValue, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }
    if (enteredEmail.trim() === "") {
      setEnteredEmailIsValid(false);
    }
    if (enteredContact.trim() === "") {
      setEnteredContactIsValid(false);
    }
    if (enteredAddress.trim() === "") {
      setEnteredAddressIsValid(false);
    }

      console.log(enteredValue);
      e.target.reset();
      setTimeout(() => {
        setAlert(false);
      }, 3050);
      setShowLoader(false);
      
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input type="text" name="enteredName" onChange={onInputChangeHandler} />
        {!enteredNameIsValid && (
          <p className="error-text">Must Enter Your Name.</p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="enteredEmail"
          onChange={onInputChangeHandler}
        />
        {!enteredEmailIsValid && (
          <p className="error-text">Must Enter Your Email.</p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          name="enteredContact"
          onChange={onInputChangeHandler}
        />
        {!enteredContactIsValid && (
          <p className="error-text">Must Enter Your Contact.</p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="enteredAddress"
          onChange={onInputChangeHandler}
        />
        {!entertedAddressIsValid && (
          <p className="error-text">Must Enter Your Address.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
      {!showLoader && (
        <div className="loaderGif">
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      )}
      {!alert && (
        <div className="alert-notification">
          <strong>Hello! </strong> You Have Successfully Submitted Your Form.
        </div>
      )}
    </form>
  );
};

export default SimpleInput;
