import ClientComponent from '@/components/ClientComponent';
import ServerComponent from '@/components/ServerComponent';

export default function ServerComponentPage() {
  const environment = typeof window === 'undefined' ? 'server' : 'client';

  console.log('current environment in page:', environment);

  return (
    <>
      <ServerComponent />
      <ClientComponent />
    </>
  );
}
