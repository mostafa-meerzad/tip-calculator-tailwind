import { useTip } from "../hooks/useTip";

export const Output = () => {
  const { tipAmount, total, reset } = useTip();

  return (
    <div className=" bg-very-dark-cyan rounded-2xl p-8 flex flex-col  gap-3 w-full min-h-80 max-w-md ">
      <OutputUnit title="Tip Amount" data={tipAmount} />

      <OutputUnit title="Total" data={total} />

      <button
        className={`uppercase text-xl w-full p-4   rounded-lg bg-strong-cyan text-very-dark-cyan hover:bg-light-grayish-cyan mt-auto 
       ${total === "0.00" && "opacity-25"}`}
        onClick={reset}
      >
        reset
      </button>
    </div>
  );
};

type OutputUnitProps = { title: string; data: string };
const OutputUnit = ({ title, data }: OutputUnitProps) => {
  return (
    <div className="flex justify-between flex-row  p-2">
      <div>
        <h2 className="text-lg text-light-grayish-cyan sm:text-sm">{title}</h2>
        <p className=" text-dark-grayish-cyan sm:text-xs">/ person</p>
      </div>
      <h2 className="text-strong-cyan text-4xl ">${data}</h2>
    </div>
  );
};
