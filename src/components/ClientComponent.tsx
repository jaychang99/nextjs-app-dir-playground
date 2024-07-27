'use client';
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
      {/* below server component uses `fs`, which is only available on server. (nodeJS) */}
      {/* any attempts to use this component on client will result in error. */}
      {/* <ServerComponent /> */}
    </div>
  );
};

export default ClientComponent;
