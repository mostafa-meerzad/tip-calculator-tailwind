export function calculate(bill: number, tip: number, people: number): string {
  // todo: take bill, tip, and number of people and calculate how much it costs for each person
  // todo: tip is in percents need to find how much of the total bill it is, then add the tip amount with bill amount and divide it on number of people
  // todo: tipAmount = (bill * tip) / 100
  // todo: costPerPerson = (bill + tipAmount) / numPeople

  const tipAmount: number = (bill * tip) / 100;
  const costPerPerson: number = (bill + tipAmount) / people;
  return costPerPerson.toFixed(2);
}
