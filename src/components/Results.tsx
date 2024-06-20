import { useEffect } from "react";
import { useTip } from "../context/TipContext";
import { useSpring, animated } from "@react-spring/web";

export const Results = () => {
  const { reset, totalCost, tipAmount } = useTip();

  const [animatedTipAmount, apiTipAmount] = useSpring(() => ({
    number: 0,
    from: { number: 0 },
  }));
  const [animatedTotalCost, apiTotalCost] = useSpring(() => ({
    number: 0,
    from: { number: 0 },
  }));

  useEffect(() => {
    apiTipAmount.start({ number: parseFloat(tipAmount) });
    apiTotalCost.start({ number: parseFloat(totalCost) });
  }, [tipAmount, totalCost, apiTipAmount, apiTotalCost]);

  return (
    <div className=" bg-very-dark-cyan rounded-2xl p-8 flex flex-col  gap-3 w-full min-h-80">
      <div className="result-wrapper">
        <div>
          <h2 className="result-title">tip amount</h2>
          <p className=" result-sub-title">/ person</p>
        </div>
        <h2 className="result ">
          <animated.span>
            {animatedTipAmount.number.to((n) => `$${n.toFixed(2)}`)}
          </animated.span>
          {}
        </h2>
      </div>

      <div className="result-wrapper">
        <div>
          <h2 className="result-title">total</h2>
          <p className=" result-sub-title">/ person</p>
        </div>
        <h2 className="result ">
          <animated.span>
            {animatedTotalCost.number.to((n) => `$${n.toFixed(2)}`)}
          </animated.span>
        </h2>
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
