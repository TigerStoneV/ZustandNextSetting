import { useCounterStore } from "../stores/testStore";
import { useGetFromStore } from "../../hooks/zustandHooks";

const HomePage: React.FC = () => {
  const { increment, decrement } = useCounterStore();

  const counts = useGetFromStore(useCounterStore, (state) => state.count);

  return (
    <div>
      <h1>Zustand Example</h1>
      {/* <p>Count: {countState}</p> */}
      <p>Count: {counts}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default HomePage;
