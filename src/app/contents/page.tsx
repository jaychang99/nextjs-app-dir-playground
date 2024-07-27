import Link from 'next/link';

export default function ContentsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-50">
        Contents
      </h1>
      <Link href="/server-component">Server Component Page</Link>
    </div>
  );
}
