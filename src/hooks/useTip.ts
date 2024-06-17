import { useState } from "react";

type UesTip = {
  calculateTip: () => void;
  reset: () => void;
  tipAmount: string;
  total: string;
  setBill: (bill: number) => void;
  setTip: (tip: number) => void;
  setPeople: (people: number) => void;
};

export function useTip(): UesTip {
  const [tipAmount, setTipAmount] = useState("0");
  const [total, setTotal] = useState("0");

  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);

  const calculateTip = () => {
    const tipAmount: number = (bill * tip) / 100;
    const tipPerPerson = tipAmount / people;
    const costPerPerson: number = (bill + tipAmount) / people;

    setTipAmount(tipPerPerson.toFixed(2));
    setTotal(costPerPerson.toFixed(2));
  };

  const reset = () => {
    setTipAmount("0");
    setTotal("0");
    setTip(0);
    setBill(0);
    setPeople(1);
  };

  return { calculateTip, reset, tipAmount, total, setBill, setPeople, setTip };
}
