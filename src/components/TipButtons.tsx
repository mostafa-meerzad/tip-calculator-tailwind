import { useTip } from "../context/TipContext";

export const TipButtons = () => {
  const { setTip, tip } = useTip();

  const btnContent = [
    { btn: 5 },
    { btn: 10 },
    { btn: 15 },
    { btn: 25 },
    { btn: 50 },
  ];

  return (
    <div>
      <h2 className="title">select tip %</h2>
      <div className=" grid grid-cols-2 gap-5 sm:grid-cols-3">
        {btnContent.map(({ btn }) => {
          return (
            <button
              className={`btn ${tip === btn && "btn-active"}`}
              onClick={() => setTip(btn)}
              key={btn}
            >
              {btn}%
            </button>
          );
        })}
        <input
          type="text"
          placeholder="custom"
          className="customBtn "
          onChange={(e) => setTip(Number(e.target.value))}
        />
      </div>
    </div>
  );
};
