import { useState } from "react";
import { calculateTip } from "../utils/calculateTip";

const useCalculateTip = () => {
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);

  const calculate = () => {
    if (tip === 0 && bill > 0 && people > 0)
      return calculateTip(bill, tip, people);

    if (tip && bill && people) return calculateTip(bill, tip, people);
  };

  return { tip, setTip, bill, setBill, people, setPeople, calculate };
};

export default useCalculateTip;

function calculateTip(bill: number, tip: number, people: number): string[]{
  // todo: take bill, tip, and number of people and calculate how much it costs for each person
  // todo: tip is in percents need to find how much of the total bill it is, then add the tip amount with bill amount and divide it on number of people
  // todo: tipAmount = (bill * tip) / 100
  // todo: costPerPerson = (bill + tipAmount) / numPeople

  const tipAmount: number = (bill * tip) / 100;
  const costPerPerson: number = (bill + tipAmount) / people;
  return [costPerPerson.toFixed(2), tipAmount.toString()];
}
