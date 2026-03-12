import { createAxiosClientInstance } from 'api-client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from './App.tsx';

createAxiosClientInstance(import.meta.env.VITE_BACKEND_API_URL);

const queryClient = new QueryClient();

export const AppWrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};
