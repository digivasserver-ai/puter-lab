# Puter.js Lab

Full-stack reference app on [Puter](https://puter.com): a React site served from Puter hosting plus a
serverless worker, both deployed automatically from GitHub Actions. Built to prove the integration
path end to end — commit to `main`, live URL.

## What is here

| | |
|---|---|
| `site/` | React 19 + TypeScript + Vite app using `@heyputer/puter.js` — live at **https://lab-react.puter.site** |
| `worker/hello.js` | Puter serverless worker — live at **https://lab-hello.puter.work** |

Worker routes, all live:

| route | response |
|---|---|
| `/ping` | `{ pong, hello: "from-lab" }` |
| `/echo/:msg` | `{ echo: "<msg>" }` |
| `/health` | `{ status, service, deployed, time }` |

## Puter.js examples

Each file under `site/src/examples/` is a self-contained demonstration:

| example | Puter.js capability |
|---|---|
| `aiChat.tsx` | AI chat |
| `fileSystem.tsx` | filesystem access |
| `kvStore.tsx` | key-value store |
| `osInfo.tsx` | OS information |
| `uiExamples.tsx` | UI components |

## Deployment

Push to `main` triggers two workflows:

- `deploy-site.yml` — builds `site/` and publishes to the Puter subdomain
- `deploy-worker.yml` — redeploys the worker via `HeyPuter/puter-worker-deploy-action@v1.0.1`;
  keeping the worker name preserves the route, so the URL stays stable

Auth uses the `PUTER_AUTH_TOKEN` repository secret. It is never committed.

## Why this exists

Puter gives you hosting, auth, storage, a key-value store and serverless functions without an API key
for each. This repo is the smallest honest proof that the whole path works from CI: build on GitHub,
deploy onto someone else's platform, keep the URLs stable across deploys.

## Related

Puter open-sourced an AI app builder in the same ecosystem
([`HeyPuter/builder`](https://github.com/HeyPuter/builder)) — a prompt-to-app generator that ships
the MCP SDK as a core runtime dependency. Different product from this one: that one generates code,
this one is hand-built integration work.

MIT licensed.
