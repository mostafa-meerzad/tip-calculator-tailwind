import Title from "./Title";
import Calculator from "./components/Calculator";
import Output from "./components/Output";

const App = () => {
  return (
    <main className="font-space-mono ">
      <h1>
        <Title />
      </h1>
      <div className="w-screen ">
        <Calculator />
        <Output/>
      </div>
    </main>
  );
};
export default App;
