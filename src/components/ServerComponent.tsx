import { Schema } from '@/types/schema';
import fs from 'fs';

const ServerComponent = () => {
  const environment = typeof window === 'undefined' ? 'server' : 'client';

  console.log('current environment in server component:', environment);

  const rawData = fs.readFileSync('mockdb.json', 'utf-8');
  const data = JSON.parse(rawData) as Schema;

  return (
    <div>
      {data.users.map((user) => (
        <div
          key={user.id}
          className="border border-gray-300 dark:border-gray-700 p-4 my-2"
        >
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-50">
            {user.name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {user.email}
          </p>
        </div>
      ))}
    </div>
  );

  return <div>ServerComponent</div>;
};

export default ServerComponent;
