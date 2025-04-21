// app/page.tsx

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <p>
        <Link href="https://addmaru.tech" target="_blank" rel="noopener noreferrer">
          add。のホームページです
        </Link>
      </p>
    </main>
  );
}
