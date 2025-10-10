# CTF Cognito - Capture The Flag Challenge

## Overview
CTF Cognito is a cybersecurity challenge platform for the All Kerala Tech Fest. The application features a modern, animated frontend with a full-stack Express + React architecture.

**Current State**: Fully functional and ready for development/deployment in Replit environment.

## Project Architecture

### Tech Stack
- **Frontend**: React 18 + Vite + TypeScript
- **Backend**: Express.js + TypeScript
- **Styling**: Tailwind CSS 3.4 + Radix UI Components
- **Database**: Drizzle ORM with PostgreSQL support (currently using in-memory storage)
- **Build Tool**: Vite 5.4 for frontend, esbuild for backend
- **Dev Server**: Single server on port 5000 serving both frontend and backend

### Project Structure
```
.
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/  # UI components (Radix UI, custom animations)
│   │   ├── pages/       # Page components
│   │   ├── lib/         # Utilities and query client
│   │   └── hooks/       # React hooks
│   └── index.html       # Entry HTML file
├── server/              # Backend Express application
│   ├── index.ts         # Main server entry point
│   ├── routes.ts        # API route definitions
│   ├── storage.ts       # Storage interface (in-memory implementation)
│   └── vite.ts          # Vite dev server setup
├── shared/              # Shared types and schemas
│   └── schema.ts        # Drizzle ORM schema and Zod validation
└── attached_assets/     # Static assets and images
```

### Key Features
- Modern cybersecurity-themed UI with animations
- Floating particles and glitch text effects
- Countdown timer component
- Responsive navigation
- Full TypeScript coverage
- Hot Module Replacement (HMR) in development

## Development Setup

### Running the Application
The application runs on a single port (5000) serving both frontend and backend:
```bash
npm run dev
```

### Building for Production
```bash
npm run build  # Builds both frontend and backend
npm start      # Runs production build
```

### Database Management
The project is configured for PostgreSQL with Drizzle ORM but currently uses in-memory storage. To push schema changes:
```bash
npm run db:push
```

## Configuration

### Vite Configuration
- Configured for Replit proxy support with `allowedHosts: true`
- HMR configured with clientPort 443 for Replit environment
- Serves on 0.0.0.0:5173 internally, proxied through Express

### Server Configuration
- Main server runs on port 5000 (required for Replit)
- Development mode uses Vite middleware for HMR
- Production mode serves static files from dist/public

## Deployment

### Replit Deployment (Autoscale)
- **Build Command**: `npm run build`
- **Run Command**: `npm start`
- **Deployment Type**: Autoscale (stateless web application)

The application is configured to run in production mode with:
- Bundled backend with esbuild
- Optimized frontend build with Vite
- Static file serving from dist/public

## Recent Changes (October 10, 2025)
- Initial GitHub import to Replit
- Installed all npm dependencies
- Configured Vite for Replit proxy support (HMR, host settings)
- Added missing nanoid dependency
- Configured development workflow on port 5000
- Set up deployment configuration for autoscale
- Verified application functionality with cybersecurity challenge UI

## Database Schema
Currently defines a basic user schema:
- `users` table with id, username, password fields
- UUID primary key generation
- Zod validation schemas for type safety

## Notes
- The application uses in-memory storage for development
- To use PostgreSQL, ensure DATABASE_URL environment variable is set
- All API routes should be prefixed with `/api`
- Frontend assets are aliased: `@/` for client/src, `@shared/` for shared types
