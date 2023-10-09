"use client";
import { api } from "@/api/api";
import React, { useState } from "react";

export default function page() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  // hundle onchange
  const onChangeHundler = (e) => {
    const { name, value } = e.target;
    setLoginData((preData) => ({
      ...preData,
      [name]: value,
    }));
    console.log(loginData);
  };
  // hundle onclick
  const onSubmit = async () => {
    await api.post("/create");
  };
  return (
    <>
      <div className="p-10">
        <div className="lg:w-4/12 m-auto shadow-md rounded-xl">
          <h1 className="text-center font-bold text-4xl p-10">Login here</h1>
          <div className="p-5">
            <div className="py-4">
              <label className="text-2xl py-2 w-full block" htmlFor="email">
                Enter your name
              </label>
              <input
                className="text-lg py-2 px-4 border border-x-2 border-y-2 border-red-700 rounded-xl w-full block"
                type="email"
                id="email"
                name="email"
                onChange={onChangeHundler}
                placeholder="Enter email address"
              />
            </div>
            <div className="py-4">
              <label className="text-2xl py-2 w-full block" htmlFor="email">
                Enter your password
              </label>
              <input
                className="text-lg py-2 px-4 border border-x-2 border-y-2 border-red-700 rounded-xl w-full block"
                type="password"
                id="password"
                name="password"
                onChange={onChangeHundler}
                placeholder="Enter password"
              />
            </div>
            <div className="py-4 text-center">
              <button
                onClick={onSubmit}
                className="inline-block py-2 text-white font-bold px-8 text-lg bg-slate-900 rounded-2xl hover:bg-slate-600"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
