'use client';
import ServerComponent from '@/components/ServerComponent';
import { useState } from 'react';

const ClientComponent = () => {
  const environment = typeof window === 'undefined' ? 'server' : 'client';

  console.log('current environment in client component:', environment);

  const [count, setCount] = useState(0);

  return (
    <div className="flex gap-x-4">
      <hr />
      <h1>ClientComponent</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ServerComponent />
    </div>
  );
};

export default ClientComponent;
