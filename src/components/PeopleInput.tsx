import { person } from "../assets";
import { useTip } from "../context/TipContext";

export const PeopleInput = () => {
  const { people, setPeople, calculateTip } = useTip();
  return (
    <div className="people">
      <h2 className="title">number of people</h2>

      <div
        className={`flex px-6 py-3 rounded-lg bg-very-light-grayish-cyan sm:py-2 focus-within:outline-strong-cyan focus-within:outline `}
      >
        <img src={person} alt="number of people" className="object-contain" />
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]+"
          placeholder="0"
          className="w-full bg-transparent text-very-dark-cyan text-2xl text-right outline-none sm:text-xl"
          value={people}
          onChange={(e) => {
            console.log(e.target.value);
            console.log(typeof e.target.value);
            console.log(Number(e.target.value));
            // if (!e.target.value) calculateTip();
            const people = Number(e.target.value);
            if (people) setPeople(people);
            if(!e.target.value || !people) {
                alert("can't be zero")
            }
            calculateTip();
            // setPeople(Number(e.target.value));
          }}
        />
      </div>
    </div>
  );
};
