import Title from "./components/Title";
import { Input } from "./components/Input";
import { Output } from "./components/Output";

const App = () => {
  return (
    <main className="grid max-sm:w-screen justify-center gap-8 my-10 font-space-mono ">
      <h1 className=" text-center">
        <Title />
      </h1>
      <div className=" flex max-sm:flex-col max-sm:max-w-lg bg-white rounded-3xl p-7 gap-8">
        <Input />
        <Output />
      </div>
    </main>
  );
};
export default App;
