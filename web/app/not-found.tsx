import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Sorry, we can’t find that page.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-2xl px-5 py-2.5 bg-zinc-900 text-white
                   dark:bg-zinc-100 dark:text-zinc-900"
      >
        Go home
      </Link>
    </main>
  );
}
