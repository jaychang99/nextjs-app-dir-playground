import ClientComponent from '@/components/ClientComponent';
import ServerComponent from '@/components/ServerComponent';
import Link from 'next/link';

export default function ServerComponentPage() {
  const environment = typeof window === 'undefined' ? 'server' : 'client';

  console.log('current environment in page:', environment);

  return (
    <>
      <ServerComponent />
      <ClientComponent />
      <Link href="/contents"> Contents Page </Link>
    </>
  );
}
