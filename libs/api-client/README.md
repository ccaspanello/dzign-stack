# api-client

Workspace library for generating a typed API client from `apps/backend/swagger.json` using Orval.

## Scripts

- `pnpm --filter api-client generate`
- `pnpm --filter api-client clean`

## Usage

Regenerate the client after the backend OpenAPI spec changes:

```bash
pnpm generate:api-client
```
