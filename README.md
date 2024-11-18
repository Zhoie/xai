# XAI API Testing Project

This project is designed to test the capabilities of XAI API and is optimized for deployment on Vercel. Built with [Next.js](https://nextjs.org).

## Project Overview

This application serves as a testing ground for XAI API integration and showcases its capabilities.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

To use the XAI API, you need to set up an environment variable for the API key. You can obtain your `XAI_API_KEY` from [x.ai](https://x.ai).

Create a `.env.local` file in the root of your project and add the following line:

```
XAI_API_KEY=your_api_key_here
```

## XAI API Testing

This project includes:
- API endpoint testing
- Integration with Vercel deployment
- XAI functionality demonstration

## Troubleshooting

If the components are not displaying correctly, ensure the following:

1. The `tsconfig.json` file has the correct `baseUrl` and does **not** include `jsxImportSource` unless using Emotion.
2. The `components.json` file has updated alias paths pointing to `@/app/components`.
3. The `tailwind.config.ts` file includes the correct paths in the `content` array.
4. Run `npm install` to ensure all dependencies are installed after making these changes.
5. Run `npm run dev` to restart the development server after making these changes.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

This project is specifically configured for Vercel deployment, ensuring optimal performance for XAI API testing.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
