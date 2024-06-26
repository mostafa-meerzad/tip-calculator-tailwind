import React, { createContext, useState, ReactNode, useContext } from "react";

interface TipContextProps {
  tipAmount: number;
  totalCost: number;
  tip: number;
  people: number;
  bill: number;
  setBill: (bill: number) => void;
  setTip: (tip: number) => void;
  setPeople: (people: number) => void;
  calculateTip: () => void;
  reset: () => void;
}

const TipContext = createContext<TipContextProps | null>(null);

export const TipProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tipAmount, setTipAmount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);

  const calculateTip = () => {
    if (!bill || !people || !tip) return;
    const tipAmount = (bill * tip) / 100;
    const tipPerPerson = tipAmount / people;
    const costPerPerson = (bill + tipAmount) / people;

    setTipAmount(Number(tipPerPerson.toFixed(2)));
    setTotalCost(Number(costPerPerson.toFixed(2)));
  };

  const reset = () => {
    setTipAmount(0);
    setTotalCost(0);
    setTip(0);
    setBill(0);
    setPeople(0);
  };

  return (
    <TipContext.Provider
      value={{
        tipAmount,
        totalCost,
        bill,
        tip,
        people,
        setBill,
        setTip,
        setPeople,
        calculateTip,
        reset,
      }}
    >
      {children}
    </TipContext.Provider>
  );
};

export const useTip = () => {
  const context = useContext(TipContext);
  if (!context) throw new Error("useTip must be used withing a TipContext");
  return context;
};
