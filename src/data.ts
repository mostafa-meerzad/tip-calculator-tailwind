import { dollar, person } from "./assets";

type Btn = {
  content: string;
  value: number;
};

const btnContent: Btn[] = [
  { content: "5%", value: 5 },
  { content: "10%", value: 10 },
  { content: "15%", value: 15 },
  { content: "25%", value: 25 },
  { content: "50%", value: 50 },
];


export { btnContent, dollar, person };
