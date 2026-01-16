---
name: Authentication & Account Management
description: Standards for implementing secure authentication and account management using NextAuth.js and Google SSO.
---

# Authentication & Account Management Skill

This skill defines the standards for integrating secure, modern authentication into Antigravity projects.

## 1. Core Principles
- **SSO First**: Prefer Google SSO (OAuth 2.0) over local credentials.
- **Session Safety**: Use secure, HTTP-only cookies for session management.
- **Role-Based Access Control (RBAC)**: Implement strict server-side checks for protected routes (e.g., `/admin`).

## 2. Implementation Standards
- **Middleware Protection**: All protected routes MUST be guarded via Next.js Middleware.
- **Environment Variables**: `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` must NEVER be committed.
- **User Schema**: Store the minimum required profile data from Google (email, name, image, sub).

## 3. Account Management
- **Profile Page**: Every app with auth must have a `/profile` page for user settings.
- **Session Persistence**: Sessions should persist across browser restarts but expire after 30 days of inactivity.

## 4. Admin Access
- **Managed Admin**: Admin status should be managed in the database, not via client-side tokens alone.
- **Route Guarding**: Use `auth()` (server-side) to verify admin status before rendering `/admin` pages.

## 5. Security Checklist
- [ ] NextAuth secret is generated and stored in `.env`.
- [ ] OAuth callbacks are correctly configured in Google Cloud Console.
- [ ] Sensitive user data is omitted from client-side session objects.
- [ ] Middleware handles redirects for unauthenticated users.
