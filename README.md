---
name: Dev Container Setup
slug: postgres-drizzle
description: Scaffolding templates for dev container setup/ configuration.
framework: Next.js
useCase: Dev containers
css: Tailwind
database: Vercel Postgres
---

# dev-container-start

Starter kit for scaffolding and configuring my most commonly used dev containers.

### Contribution

An easy way to contribute is to fork the repository and make your pull request!  I've handled maintaining my registry
by quickly downloading my dotfiles using [degit](https://github.com/Rich-Harris/degit), a great open source project
for scaffolding created by Rich Harris (creator of Svelte).

```bash
# downloads and adds new files/ overrides similar files to the registry
npx degit acgriswold/std-config/.dotfiles/____ registry/ --force
```

### Clone and deploy

```bash
git clone https://github.com/acgriswold/dev-container-setup
```

Next, run Next.js in development mode:

```bash
pnpm dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples) ([Documentation](https://nextjs.org/docs/deployment)).
