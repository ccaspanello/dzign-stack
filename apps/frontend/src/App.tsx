import { useHelloGetHello } from 'api-client';

export const App = () => {
  const { data } = useHelloGetHello();

  return <main className="app-shell">{data ?? 'No response body returned.'}</main>;
};
