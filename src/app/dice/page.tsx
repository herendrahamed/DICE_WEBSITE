"use client";

import { useState } from "react";
import Link from "next/link";

function DiceFace({ value }: { value: number }) {
  const dotsMap: Record<number, number[][]> = {
    1: [[2, 2]],
    2: [
      [1, 1],
      [3, 3],
    ],
    3: [
      [1, 1],
      [2, 2],
      [3, 3],
    ],
    4: [
      [1, 1],
      [1, 3],
      [3, 1],
      [3, 3],
    ],
    5: [
      [1, 1],
      [1, 3],
      [2, 2],
      [3, 1],
      [3, 3],
    ],
    6: [
      [1, 1],
      [1, 2],
      [1, 3],
      [3, 1],
      [3, 2],
      [3, 3],
    ],
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2 w-full h-full p-3">
      {dotsMap[value].map(([row, col], index) => (
        <div
          key={index}
          className="w-4 h-4 bg-black rounded-full place-self-center"
          style={{
            gridRow: row,
            gridColumn: col,
          }}
        />
      ))}
    </div>
  );
}

export default function DicePage() {
  const [dice, setDice] = useState(1);
  const [rolling, setRolling] = useState(false);

  function rollDice() {
    if (rolling) return;

    setRolling(true);

    let count = 0;
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 6) + 1;
      setDice(random);
      count++;

      if (count >= 10) {
        clearInterval(interval);
        setRolling(false);
      }
    }, 80);
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-slate-900 text-white">
      {/* Header */}
      <div className="mt-16 flex flex-col items-center gap-1">
        <h1 className="text-3xl font-bold">Dice</h1>
        <p className="text-slate-400">
          {rolling ? "Rolling..." : "Click the dice to roll"}
        </p>
      </div>

      {/* Dice (FOCUS AREA) */}
      <div className="my-10">
        <button
          onClick={rollDice}
          disabled={rolling}
          className={`w-32 h-32 flex items-center justify-center rounded-xl bg-white text-black transition
        ${rolling ? "scale-95 opacity-70" : "hover:scale-105"}`}
        >
          <DiceFace value={dice} />
        </button>
      </div>

      {/* Footer */}
      <div className="mt-auto mb-90">
        <Link href="/">
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}
