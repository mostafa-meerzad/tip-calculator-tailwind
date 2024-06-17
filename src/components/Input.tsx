// import { ChangeEvent, useState } from "react";
// import { dollar, person } from "../assets";
// import { btnContent } from "../data";
// // import { verifyNumber } from "../utils/verifyNumber";
// // import Button from "./Button";

// const Calculator = () => {
//   const [tip, setTip] = useState(0);
//   const [bill, setBill] = useState(0);
//   const [people, setPeople] = useState(0);

//   return (
//     <div className="flex flex-col gap12">
//       <Input
//         title="bill"
//         placeholder="0"
//         icon={dollar}
//         value={bill}
//         callback={setBill}
//       />

//       <div className="grid grid-cols-3">
//         <h2 className="title">select tip %</h2>
//         {btnContent.map(({ content, value }) => (
//           <Button
//             content={content}
//             value={value}
//             callback={setTip}
//             key={content + value}
//           />
//         ))}
//         <input
//           type="string"
//           placeholder={"Custom"}
//           onChange={(e) => {
//             const value = e.target.value;
//             verifyNumber(value) ? setTip(0) : setTip(Number(e.target.value));
//           }}
//           className="btn"
//         />
//       </div>

//       <Input
//         title="number of people"
//         placeholder="0"
//         icon={person}
//         value={people}
//         callback={setPeople}
//       />
//     </div>
//   );
// };

// export default Calculator;

// type BtnProps = {
//   content: string;
//   value: number;
//   callback: (value: number) => void;
// };

// const Button = ({ content, value, callback }: BtnProps) => {
//   return (
//     <button type="button" className="btn" onClick={() => callback(value)}>
//       {content}
//     </button>
//   );
// };

// type InputProps = {
//   title: string;
//   placeholder: string;
//   icon: string;
//   value: number;
//   callback: (value: number) => void;
// };

// const Input = ({ title, placeholder, icon, value, callback }: InputProps) => {
//   return (
//     <div className="flex flex-row gap-12">
//       <h2 className="title">{title}</h2>
//       <div className="flex content-between gap-4 bg-light-grayish-cyan">
//         <img src={icon} alt="" />
//         <input
//           type="text"
//           placeholder={placeholder}
//           className="text-right px-4 bg-transparent text-very-dark-cyan"
//           value={value}
//           onChange={(e) => {
//             const value = e.target.value;
//             verifyNumber(value) ? callback(0) : callback(Number(value));
//           }}
//         />
//         ;
//       </div>
//     </div>
//   );
// };

// const verifyNumber = (value: string) => {
//   const regex = /[^\d+]/;
//   return regex.test(value);
// };

import { dollar, person } from "../assets";
import { useTip } from "../hooks/useTip";

// type Props = {}
export const Input = () => {
  const { setBill, setTip, setPeople } = useTip();
  return (
    <div className="flex flex-col gap-6">
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
      <h2 className=" my-2 capitalize text-lg text-dark-grayish-cyan">
        {title}
      </h2>

      <div className="flex px-6 py-3 rounded-lg bg-very-light-grayish-cyan">
        <img src={logo} alt={title} className="object-contain" />
        <input
          type="text"
          className="w-full bg-transparent text-very-dark-cyan text-2xl text-right "
          onChange={(e) => handler(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

type ButtonsProps = {
  handler: (tip: number) => void;
};
const Buttons = ({ handler }: ButtonsProps) => {
  const btnContent = [
    { title: 5 },
    { title: 10 },
    { title: 15 },
    { title: 25 },
    { title: 50 },
  ];

  return (
    <div>
      <h2 className=" my-2 capitalize text-lg text-dark-grayish-cyan ">
        select tip %
      </h2>
      <div className=" grid grid-cols-2 gap-5">
        {btnContent.map(({ title }) => {
          return (
            <button
              className="bg-very-dark-cyan text-very-light-grayish-cyan hover:bg-strong-cyan hover:text-very-dark-cyan text-2xl rounded-md p-3 font-bold"
              onClick={() => handler(title)}
            >
              {title}%
            </button>
          );
        })}
        <input
          type="text"
          placeholder="custom"
          className="text-very-dark-cyan placeholder-very-dark-cyan capitalize  bg-very-light-grayish-cyan hover:bg-strong-cyan hover:text-very-dark-cyan text-2xl rounded-md p-2 font-bold text-right px-6 focus:bg-very-light-grayish-cyan focus:outline-strong-cyan"
        />
      </div>
    </div>
  );
};
