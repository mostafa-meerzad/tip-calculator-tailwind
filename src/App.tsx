import Title from "./Title";
import {Input} from "./components/Input";
import { Output } from "./components/Output";

const App = () => {
  return (
    <main className="grid max-sm:w-screen gap-8 my-12 font-space-mono ">
      <h1 className=" text-center">
        <Title />
      </h1>
      <div className=" flex max-sm:flex-col bg-white rounded-3xl p-8 gap-8">
        <Input />
        <Output />
      </div>
    </main>
  );
};
export default App;
