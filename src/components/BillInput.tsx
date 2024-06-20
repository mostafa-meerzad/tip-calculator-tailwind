import { useEffect } from "react";
import { dollar } from "../assets";
import { useTip } from "../context/TipContext";

export const BillInput = () => {
  const { bill, setBill, calculateTip } = useTip();

  useEffect(() => {
    if (bill > 0) calculateTip();
  }, [bill]);

  return (
    <div className="bill">
      <h2 className="title">bill</h2>
      <div
        className={`flex px-6 py-3 rounded-lg bg-very-light-grayish-cyan sm:py-2 focus-within:outline-strong-cyan focus-within:outline `}
      >
        <img src={dollar} alt="bill" className="object-contain" />
        <input
          type="number"
          value={bill === 0 ? "" : bill}
          placeholder="0"
          pattern="[0-9]+"
          className="w-full bg-transparent text-very-dark-cyan text-2xl text-right outline-none sm:text-xl no-spinner"
          onChange={(e) => setBill(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};
