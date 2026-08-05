import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-white/60 mb-4">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Page not found.</h1>
        <p className="text-white/70 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 text-xs font-semibold tracking-[0.14em] uppercase border-2 border-white text-white hover:bg-white hover:text-black transition-colors rounded-full"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
