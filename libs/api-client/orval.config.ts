import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    input: '../../apps/backend/swagger.json',
    output: {
      target: './src/generated/client.ts',
      schemas: './src/generated/model',
      client: 'react-query',
      mode: 'split',
      prettier: true,
      clean: true,
      override: {
        mutator: {
          path: './src/orval/mutator.ts',
          name: 'axiosInstance',
        },
      },
    },
  },
});
