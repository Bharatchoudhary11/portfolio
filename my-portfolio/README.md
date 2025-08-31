# Portfolio

A simple portfolio built with Next.js (App Router), TypeScript and Tailwind CSS.

## Features

- API routes using Next.js Route Handlers
- MongoDB database using the official driver
- Zod schemas for input validation
- Real-time updates via MongoDB Change Streams and Server-Sent Events

## Development

1. Install dependencies

```bash
npm install
```

2. Provide environment variables:

```
MONGODB_URI=your-mongo-uri
MONGODB_DB=portfolio
```

3. Run the dev server

```bash
npm run dev
```

Projects can be added by sending `POST /api/projects` with `{ "title": "...", "description": "..." }` and will appear on the `/projects` page in real time.
