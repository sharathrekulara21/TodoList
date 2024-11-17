import React from "react";

const Login = ({ signIn, setSignIn, loginDetails, setLoginDetails }) => {
  const {
    firstName = "",
    lastName = "",
    password = "",
  } = loginDetails[0] || {};
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevDetails) => [{ ...prevDetails[0], [name]: value }]);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl">Sign in</h1>
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={handleInputChange}
        placeholder="First name"
        className="px-4 py-3 rounded m-1 focus:outline-none"
      />
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={handleInputChange}
        placeholder="Last name"
        className="px-4 py-3 rounded m-1 focus:outline-none"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        placeholder="password"
        className="px-4 py-3 rounded m-1 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-green-500 rounded-lg text-gray-200 px-4 py-2 text-center mx-auto mt-2"
      >
        Signin
      </button>
    </div>
  );
};

export { Login };
