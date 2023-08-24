import { useCounterStore, useTestStore } from "../stores/testStore";
import Link from "next/link";
import { useGetFromStore } from "../../hooks/zustandHooks";

const AnotherPage: React.FC = () => {
  const counts = useGetFromStore(useCounterStore, (state) => state.count);
  const firstName = useGetFromStore(useTestStore, (state) => state.firstName);
  const lastName = useGetFromStore(useTestStore, (state) => state.lastName);

  return (
    <div>
      <p> Count: {counts} </p>
      <br />
      <p> fullName: {firstName + "" + lastName}</p>
      <br />
      <Link href="/">페이지이동</Link>
    </div>
  );
};

export default AnotherPage;
