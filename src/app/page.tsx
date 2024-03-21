"use client";
import styles from "./page.module.css";
import Profile from "@/components/profile";
import { createContext } from "react";

const Context = createContext("");
export default function Home() {
  return (
    <main className={styles.main}>
      <Profile />
    </main>
  );
}
