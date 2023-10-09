import React from "react";

export default function CounterSection() {
  return (
    <>
      <div className="p-10 lg:flex lg:selection:items-center lg:selection:justify-center space-x-5 space-y-5">
        <div className="p-10 lg:w-3/12 text-center">
          <h1 className="text-5xl font-bold p-5">00</h1>
          <h1 className="text-xl">FINISHED SESSIONS</h1>
        </div>
        <div className="p-10 lg:w-3/12 text-center">
          <h1 className="text-5xl font-bold p-5">00</h1>
          <h1 className="text-xl">ENROLLED LEARNERS</h1>
        </div>
        <div className="p-10 lg:w-3/12 text-center">
          <h1 className="text-5xl font-bold p-5">00</h1>
          <h1 className="text-xl">ONLINE INSTRUCTORS</h1>
        </div>
        <div className="p-10 lg:w-3/12 text-center">
          <h1 className="text-5xl font-bold p-5">00</h1>
          <h1 className="text-xl">SATISFACTION RATE</h1>
        </div>
      </div>
    </>
  );
}
