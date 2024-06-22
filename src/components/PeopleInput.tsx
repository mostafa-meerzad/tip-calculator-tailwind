import React, { useEffect, useState } from "react";
import { person } from "../assets";
import { useTip } from "../context/TipContext";

export const PeopleInput = () => {
  const { people, setPeople, calculateTip } = useTip();
  const [isZero, setIsZero] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (isNaN(value) || value <= 0) {
      setIsZero(true);
      setPeople(0);
    } else {
      setIsZero(false);
      setPeople(value);
    }
  };

  useEffect(() => {
    if (people > 0) {
      calculateTip();
    }
  }, [people]);

  return (
    <div className="people">
      <h2 className="title flex justify-between">
        number of people{" "}
        <div className={`text-red-400 ${isZero ? "visible" : "hidden"}`}>
          can't be zero
        </div>
      </h2>

      <div
        className={`flex px-6 py-3 rounded-lg bg-very-light-grayish-cyan sm:py-2 focus-within:outline-strong-cyan focus-within:outline ${
          isZero ? "outline-red-400 focus-within:outline-red-400" : ""
        }`}
      >
        <img src={person} alt="number of people" className="object-contain" />
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]+"
          placeholder="0"
          className="w-full bg-transparent text-very-dark-cyan text-2xl text-right outline-none sm:text-xl"
          value={people === 0 ? "" : people}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
