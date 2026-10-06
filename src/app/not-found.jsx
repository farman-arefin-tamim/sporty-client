export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="text-7xl font-extrabold text-accent">404</p>
      <h1 className="mt-4 text-3xl font-bold">
        Looks like you are out of bounds
      </h1>
      <p className="mt-3 text-muted">
        The page you are looking for does not exist or has been moved. Let us
        get you back to the game.
      </p>
      <div className="mt-8">
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