import Link from 'next/link';
export function Header({ title = '' }) {
  return (
    <div className="flex items-center justify-between max-w-3xl px-8 mx-auto py-4">
      <Link href="/">
        <a className="block font-bold text-lg">Jason Andersen</a>
      </Link>
      <a target="_blank" href="https://twitter.com/jasonrandersen" rel="noopener">Follow</a>
    </div>
  );
}
