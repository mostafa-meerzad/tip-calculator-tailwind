import { dollar, person } from "../assets";
import { useTip } from "../hooks/useTip";

export const Input = () => {
  const { setBill, setTip, setPeople } = useTip();
  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <NumberInput title="bill" logo={dollar} handler={setBill} />
      <Buttons handler={setTip} />
      <NumberInput title="number of people" logo={person} handler={setPeople} />
    </div>
  );
};

type NumberInput = {
  title: string;
  logo: string;
  handler: (value: number) => void;
};

const NumberInput = ({ title, logo, handler }: NumberInput) => {
  return (
    <div>
      <h2 className="title">{title}</h2>

      <div
        className={`flex px-6 py-3 rounded-lg bg-very-light-grayish-cyan sm:py-2 focus-within:outline-strong-cyan focus-within:outline `}
      >
        <img src={logo} alt={title} className="object-contain" />
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]+"
          placeholder="0"
          className="w-full bg-transparent text-very-dark-cyan text-2xl text-right outline-none sm:text-xl"
          onChange={(e) => {
            handler(Number(e.target.value));
          }}
        />
      </div>
    </div>
  );
};

type ButtonsProps = {
  tip: number;
  handler: (tip: number) => void;
};
const Buttons = ({ tip, handler }: ButtonsProps) => {
  const btnContent = [
    { title: 5, value: 5 },
    { title: 10, value: 10 },
    { title: 15, value: 15 },
    { title: 25, value: 25 },
    { title: 50, value: 50 },
  ];

  return (
    <div>
      <h2 className="title">select tip %</h2>
      <div className=" grid grid-cols-2 gap-5 sm:grid-cols-3">
        {btnContent.map(({ title, value }) => {
          return (
            <button
              className={`btn ${tip === value && "bg-strong-cyan"}`}
              onClick={() => handler(value)}
              key={title}
            >
              {title}%
            </button>
          );
        })}
        <input
          type="text"
          placeholder="custom"
          className="customBtn "
          onChange={(e) => handler(Number(e.target.value))}
        />
      </div>
    </div>
  );
};
