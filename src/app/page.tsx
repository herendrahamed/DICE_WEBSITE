import Link from "next/link";

export default function Home() {
  return (
    <main className="p-12 min-h-screen flex flex-col items-center gap-6 bg-slate-900 text-white">
      <h1 className="text-4xl font-bold">Dice App</h1>

      <Link href="/dice">
        <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Go to Dice
        </button>
      </Link>
    </main>
  );
}
