# Drive

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Convex](https://img.shields.io/badge/Convex-1.12-orange)](https://convex.dev/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF)](https://clerk.dev/)

A file storage and sharing application built with modern web technologies. Manage all your files for yourself and your organization from a single account.

**🚀 Live Demo:** https://drive-tawny.vercel.app

---

## Features

- 📁 **File Management** - Upload, organize, and manage your files
- ⭐ **Favorites** - Mark important files for quick access
- 🗑️ **Trash** - Soft-delete with recovery option
- 🔐 **Authentication** - Secure user accounts via Clerk
- 🏢 **Organization Support** - Multi-tenant architecture for teams
- ⚡ **Real-time** - Live updates via Convex
- 📱 **Responsive** - Works on desktop and mobile

---

## Tech Stack

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Convex](https://convex.dev/)** - Backend-as-a-Service (database, functions, real-time)
- **[Clerk](https://clerk.dev/)** - Authentication and user management
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[Radix UI](https://radix-ui.com/)** - Accessible component primitives
- **[shadcn/ui](https://ui.shadcn.com/)** - UI component library

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Convex account (free tier available)
- Clerk account (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dekolor/drive.git
   cd drive
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your credentials:
   ```env
   # Convex
   CONVEX_URL=https://your-deployment.convex.cloud
   
   # Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   ```

4. **Initialize Convex**
   ```bash
   npx convex dev
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)**

---

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `CONVEX_URL` | Your Convex deployment URL | ✅ |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key | ✅ |
| `CLERK_SECRET_KEY` | Clerk secret key | ✅ |

---

## Project Structure

```
drive/
├── convex/           # Convex backend functions
│   ├── schema.ts     # Database schema
│   └── *.ts          # API functions
├── src/
│   ├── app/          # Next.js App Router
│   │   ├── dashboard/
│   │   │   ├── files/
│   │   │   ├── favorites/
│   │   │   └── trash/
│   │   └── page.tsx  # Landing page
│   ├── components/   # React components
│   └── lib/          # Utility functions
├── public/           # Static assets
└── ...
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Contributing

This is a personal portfolio project. Feel free to fork and modify for your own use.

---

## License

[MIT](LICENSE) © Stefan

---

## Related Projects

- [filme](https://github.com/dekolor/filme) - Movie showtimes app (migrating to Convex)
- [awb_tracker](https://github.com/dekolor/awb_tracker) - Package tracking system

---

*Built with ❤️ using Next.js, Convex, and Clerk*
