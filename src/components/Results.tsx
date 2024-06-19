import { useTip } from "../context/TipContext";

export const Results = () => {
  const { reset, totalCost, tipAmount } = useTip();

  return (
    <div className=" bg-very-dark-cyan rounded-2xl p-8 flex flex-col  gap-3 w-full min-h-80 max-w-md ">
      <div className="result-wrapper">
        <div>
          <h2 className="result-title">tip amount</h2>
          <p className=" result-sub-title">/ person</p>
        </div>
        <h2 className="result ">${tipAmount}</h2>
      </div>

      <div className="result-wrapper">
        <div>
          <h2 className="result-title">total</h2>
          <p className=" result-sub-title">/ person</p>
        </div>
        <h2 className="result ">${totalCost}</h2>
      </div>

      <button
        className={`uppercase text-xl w-full p-3   rounded-lg bg-strong-cyan text-very-dark-cyan hover:bg-light-grayish-cyan mt-auto 
       ${totalCost === "0.00" && "opacity-25"}`}
        onClick={reset}
      >
        reset
      </button>
    </div>
  );
};
