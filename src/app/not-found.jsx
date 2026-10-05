import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-16">
      <div className="text-center">
        <p className="text-7xl font-bold text-accent sm:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 text-muted">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md bg-accent px-5 py-3 font-medium text-white transition-opacity hover:opacity-90"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}