import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGen = () => {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [symbol, setsymbol] = useState(false);
  const [Password, setPassword] = useState("");
  const pssref=useRef(null);

  const handleGenerate = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) {
      chars += "0123456789";
    }
    if (symbol) {
      chars += "!@#$%^&*()_+[]{}|;:,.<>?/";
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }
    setPassword(generatedPassword);
  }, [length, number, symbol, setPassword]);

  const copyToClipboard = useCallback(() => {
    if (Password) {
        pssref.current?.select();
      navigator.clipboard.writeText(Password).then(() => {
        alert("Password copied to clipboard!");
      }).catch((err) => {
        console.error("Failed to copy: ", err);
      });
    } else {
      alert("No password to copy!");
    }
  }, [Password]);

  useEffect(()=>{
    handleGenerate();
  },[length, number, symbol,handleGenerate]);
  return (
    <div className="h-screen w-full flex justify-center bg-gray-100">
      <h1 className="text-4xl">This is a Password Generator</h1>
      <div className="flex justify-center items-center flex-col">
        <input
          type="text"
          value={Password}
          className="outline-none border-2 w-full py-1 px-3"
          placeholder="Generated Password"
          readOnly
          ref={pssref}
        />
        <button
            onClick={copyToClipboard}
         className="outline-none border-2 px-3 py-1 my-2 bg-blue-500 text-white rounded-4xl">
          copy
        </button>

        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setlength(e.target.value)}
          className="cursor-pointer w-full"
        />

        <label>length : {length}</label>

        <div className="flex justify-center items-center flex-col">
          <label className="text-lg">Include Numbers</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setnumber((prev) => !prev)}
          />
          <label className="text-lg">Include Symbols</label>
          <input
            type="checkbox"
            checked={symbol}
            onChange={() => setsymbol((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordGen;
