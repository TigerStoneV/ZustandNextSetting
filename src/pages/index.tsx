import {
  useCounterStore,
  useNonPersistStore,
  useTestStore,
} from "../stores/testStore";
import { useGetFromStore } from "../../hooks/zustandHooks";
import Link from "next/link";
import { useState } from "react";

const HomePage: React.FC = () => {
  const { increment, decrement } = useCounterStore();
  const { updateFirstName, updateLastName } = useTestStore();
  const counts = useGetFromStore(useCounterStore, (state) => state.count);
  const [rawName1, setRawName1] = useState("");
  const [rawName2, setRawName2] = useState("");
  const firstNameValue = useGetFromStore(
    useTestStore,
    (state) => state.firstName
  );
  const lastNameValue = useGetFromStore(
    useTestStore,
    (state) => state.lastName
  );
  // non persist
  const count = useNonPersistStore((state) => state.count);
  const increments = useNonPersistStore((state) => state.increment);
  const [incrementValue, setIncrementValue] = useState<number>(0);
  const handleIncrement = () => {
    increments(incrementValue);
  };
  return (
    <div>
      <h1> Zustand Example </h1>
      <p> Count: {counts} </p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br /> <br /> <br /> <br />
      <p> 풀네임 : {firstNameValue + "" + lastNameValue}</p>
      <input
        type="text"
        placeholder="First Name"
        value={rawName1}
        onChange={(e) => setRawName1(e.target.value)} // Pass the input value to the function
      />
      <input
        type="text"
        placeholder="Last Name"
        value={rawName2}
        onChange={(e) => setRawName2(e.target.value)} // Pass the input value to the function
      />
      <button
        onClick={() => {
          updateFirstName(rawName1);
          updateLastName(rawName2);
        }}
      >
        저장하기
      </button>
      <br /> <br />
      <p>nonpersist count : {count}</p>
      <input
        type="number"
        value={incrementValue}
        onChange={(e) => setIncrementValue(parseInt(e.target.value, 10))}
      />
      <button onClick={handleIncrement}>Increment</button>
      <br /> <br />
      <Link href="/anotherPage">페이지이동</Link>
    </div>
  );
};

export default HomePage;
