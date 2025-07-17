# Full-Stack Boilerplate with Next.js and Express

A production-ready full-stack boilerplate featuring Next.js for the frontend and Express for the backend, with built-in authentication (Google & GitHub), secure token management, and seamless API integration.

## 🚀 Features
- **Next.js Frontend**: Modern React framework with server-side rendering
- **Express Backend**: Flexible and powerful API server
- **Unified Architecture**: Frontend and backend accessible under the same domain
- **Authentication**:
  - Google OAuth 2.0
  - GitHub OAuth
  - JWT-based authentication with access & refresh tokens
  - CSRF protection
- **Security**:
  - No CORS issues 
  - Secure, HttpOnly cookies
  - CSRF token protection
  - Rate limiting
- **Database**: PostgreSQL with Prisma ORM
- **Developer Experience**:
  - TypeScript support
  - Hot reloading
  - Pre-configured ESLint and Prettier

## 🏗️ Architecture

### Core Concept
- **Unified Domain Architecture**: Frontend and backend operate under the same domain
- **Zero CORS**: Seamless communication between frontend and backend
- **Custom Authentication**: Built-in authentication system with enhanced security features

### How It Works
1. **Development Mode**:
   - Next.js proxies API requests to Express backend
   - All requests hit the same Next.js development server
   - Proxied to Express backend running on a different port

2. **Production Mode**:
   - In prod request at frontend_url`/api` will be proxied to Express backend by nginx or any other reverse proxy, by this we eliminate cors issues, no need to grant any cors permissions back to frontend
   - Static files served by Next.js
   - All requests appear to come from the same origin

### Authentication Flow
- **Token-based Authentication**:
  - Access token (short-lived) and refresh token (long-lived)
  - Secure, HttpOnly cookies for token storage
  - CSRF protection with dedicated tokens
  - Automatic token refresh
  - Two providers/functions are written to provide auth in client side components and server side components

### Don't forget to set environment variables 
- Backend is written in such way that if you not provide right environment variables to relax then it auth system behaves like prod then demand HTTPS(SSL) to set cookie and in dev mode you have only http,this let you to suffer in dev mode

## 🛠️ Tech Stack

| Component       | Technology  | Purpose                                  |
|----------------|-------------|------------------------------------------|
| **Frontend**   | Next.js 14  | React framework with SSR/SSG             |
| **Backend**    | Express.js  | API server and business logic            |
| **Database**   | PostgreSQL  | Primary data storage                     |
| **ORM**        | Prisma      | Type-safe database operations            |
| **Auth**       | Passport.js | Authentication middleware                |
| **Cache**      | Redis       | Session and rate limiting store          |
| **Styling**    | Tailwind CSS| Utility-first CSS framework              |
| **Deployment** | Docker      | Containerization for easy deployment     |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL
- Redis (for session storage and rate limiting)
- Google OAuth 2.0 credentials
- GitHub OAuth App credentials

### Installation

1. Clone the repository
   ```bash
   git clone [your-repo-url]
   cd workspace-boiler_plate