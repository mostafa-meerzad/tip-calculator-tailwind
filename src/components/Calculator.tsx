import { ChangeEvent, useState } from "react";
import { dollar, person } from "../assets";
import { btnContent } from "../data";
// import { verifyNumber } from "../utils/verifyNumber";
// import Button from "./Button";

const Calculator = () => {
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);

  return (
    <div className="flex flex-col gap12">
      <Input
        title="bill"
        placeholder="0"
        icon={dollar}
        value={bill}
        callback={setBill}
      />

      <div className="grid grid-cols-3">
        <h2 className="title">select tip %</h2>
        {btnContent.map(({ content, value }) => (
          <Button
            content={content}
            value={value}
            callback={setTip}
            key={content + value}
          />
        ))}
        <input
          type="string"
          placeholder={"Custom"}
          onChange={(e) => {
            const value = e.target.value;
            verifyNumber(value) ? setTip(0) : setTip(Number(e.target.value));
          }}
          className="btn"
        />
      </div>

      <Input
        title="number of people"
        placeholder="0"
        icon={person}
        value={people}
        callback={setPeople}
      />
    </div>
  );
};

export default Calculator;

type BtnProps = {
  content: string;
  value: number;
  callback: (value: number) => void;
};

const Button = ({ content, value, callback }: BtnProps) => {
  return (
    <button type="button" className="btn" onClick={() => callback(value)}>
      {content}
    </button>
  );
};

type InputProps = {
  title: string;
  placeholder: string;
  icon: string;
  value: number;
  callback: (value: number) => void;
};

const Input = ({ title, placeholder, icon, value, callback }: InputProps) => {
  return (
    <div className="flex flex-row gap-12">
      <h2 className="title">{title}</h2>
      <div className="flex content-between gap-4 bg-light-grayish-cyan">
        <img src={icon} alt="" />
        <input
          type="text"
          placeholder={placeholder}
          className="text-right px-4 bg-transparent text-very-dark-cyan"
          value={value}
          onChange={(e) => {
            const value = e.target.value;
            verifyNumber(value) ? callback(0) : callback(Number(value));
          }}
        />
        ;
      </div>
    </div>
  );
};

const verifyNumber = (value: string) => {
  const regex = /[^\d+]/;
  return regex.test(value);
};
