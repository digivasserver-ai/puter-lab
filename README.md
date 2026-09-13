# Puter.js Lab

Full-Stack app on Puter: React site (Puter hosting) + serverless worker, auto-deployed from GitHub Actions.

- **Site**: `site/` (Puter.js React template) → https://lab-react.puter.site
- **Worker**: `worker/hello.js` → https://lab-hello.puter.work (`/ping`, `/echo/<msg>`, `/health`)

## Automation
Push to `main` triggers:
- `deploy-site.yml` — builds `site/` and publishes to the Puter subdomain
- `deploy-worker.yml` — redeploys the worker from `worker/hello.js` (same name preserves routing)

Auth: `PUTER_AUTH_TOKEN` repo secret (Puter auth token).