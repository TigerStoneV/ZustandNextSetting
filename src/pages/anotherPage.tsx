import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useCounterStore } from "../stores/testStore";

const AnotherPage: React.FC = () => {
  const { count } = useCounterStore();

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default AnotherPage;
