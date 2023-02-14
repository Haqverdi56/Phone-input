import React, { useState } from "react";

const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    const phoneNumberLength = input.length;
    if (phoneNumberLength < 7) {
        return setPhoneNumber(`(${input.slice(0,4)}) ${input.slice(3)}`)
    } 
    return setPhoneNumber(`(${input.slice(0,3)}) ${input.slice(3, 6)}-${input.slice(6,10)}`)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPhoneNumber("");
  };

  return (
    <form>
      <input
        type="text"
        value={phoneNumber}
        placeholder="(555) 555-5555"
        onChange={handleChange}
      />
      <button type="submit" disabled={phoneNumber.length !== 14} onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default PhoneInput;
