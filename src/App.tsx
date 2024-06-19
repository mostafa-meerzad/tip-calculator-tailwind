import Title from "./components/Title";
import { TipButtons } from "./components/TipButtons";
import { BillInput } from "./components/BillInput";
import { PeopleInput } from "./components/PeopleInput";
import { Results } from "./components/Results";
import { TipProvider } from "./context/TipContext";

const App = () => {
  return (
    <main className="grid max-sm:w-screen justify-center gap-8 my-10 font-space-mono ">
      <h1 className=" text-center">
        <Title />
      </h1>
      <div className=" flex max-sm:flex-col max-sm:max-w-lg bg-white rounded-3xl p-7 gap-8">
        <TipProvider>
          <div className="flex flex-col gap-4 w-full max-w-md">
            <BillInput />
            <TipButtons />
            <PeopleInput />
          </div>
          <Results />
        </TipProvider>
      </div>
    </main>
  );
};
export default App;
