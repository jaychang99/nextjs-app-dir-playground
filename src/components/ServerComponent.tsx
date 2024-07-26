const ServerComponent = () => {
  const environment = typeof window === 'undefined' ? 'server' : 'client';

  console.log('current environment in server component:', environment);

  return <div>ServerComponent</div>;
};

export default ServerComponent;
