---
name: Web Development
description: Comprehensive standards and best practices for building modern web applications (React, Next.js, TypeScript, Tailwind).
---

# Web Development Skill

This skill defines the **mandatory** standards, conventions, and workflows for all web development tasks.

## 1. Core Philosophy & Constraints
- **Clean & Scalable**: Follow SOLID principles. Prefer functional/discriminative programming.
- **Type Safety**: strict TypeScript usage is non-negotiable.
- **Component-Driven**: Build small, focused, reusable components.
- **Local Environment**: **NO Local Docker**. Use native runtimes (`npm run dev`) locally. Dockerfiles are for remote production only.
- **Security First**: 
  - NO hardcoded secrets (`.env` only).
  - NO exposed APIs without Auth.
  - Scan for key leakage before commits.

## 2. Technology Stack
- **Frameworks**: React, Next.js (App Router).
- **Language**: TypeScript (Strict Mode).
- **Styling**: Tailwind CSS, Shadcn UI, Radix UI primitives.
- **State**: React Context (simple), Redux Toolkit (complex/global).
- **Validation**: Zod.
- **Forms**: React Hook Form.
- **Testing**: Jest, React Testing Library.

## 3. Naming Conventions
| Type | Format | Example |
|------|--------|---------|
| **Directories** | kebab-case | `components/auth-wizard/` |
| **Files** | kebab-case | `user-profile.tsx`, `api-utils.ts` |
| **Components** | PascalCase | `UserProfile`, `SubmitButton` |
| **Interfaces/Types** | PascalCase | `UserData`, `AuthResponse` |
| **Variables/Props** | camelCase | `isLoading`, `userData`, `handleClick` |
| **Constants/Env** | UPPER_CASE | `API_URL`, `MAX_RETRIES` |

**Specific Patterns**:
- Event Handlers: `handleClick`, `handleSubmit`
- Booleans: `isLoading`, `hasError`, `canSubmit`
- Hooks: `useAuth`, `useForm`
- Abbreviations: Avoid them. Exceptions: `err`, `req`, `res`, `props`, `ref`.

## 4. Code Style & Implementation
- **Formatting**: Tabs for indentation. Single quotes. No semicolons (unless needed). 80 char line limit.
- **Equality**: Always use strict `===`.
- **Control Flow**: Curly braces for multi-line `if`. Else on same line as closing brace.
- **Planning**: Write pseudocode before implementation. Document architecture.

## 5. React & Next.js Best Practices
- **Server Components**: Default to Server Components. Use `'use client'` only for interactivity (hooks, listeners).
- **Performance**: 
  - `useCallback`/`useMemo` for expensive ops.
  - `React.lazy` / Dynamic imports for code splitting.
  - `Next/Image` for images.
- **Key Props**: Never use index as key.
- **Hooks**: Extract logic to custom hooks. Clean up `useEffect`.

## 6. TypeScript Rules
- **Strict Mode**: Enabled.
- **Types vs Interfaces**: Prefer `interface` for objects (extensibility). Use `type` for unions/mappings.
- **Generics**: Use for flexible actions/utilities.
- **No `any`**: Use `unknown` or strict checks. Use Type Guards.

## 7. UI & Styling
- **Tailwind**: Utility-first. Mobile-first (responsive).
- **Shadcn UI**: Use for consistent base components.
- **Theming**: CSS variables for colors/spacing. Dark mode via Tailwind/CSS vars.
- **Accessibility (A11y)**:
  - Semantic HTML.
  - Keyboard navigation coverage.
  - ARIA attributes where semantic tags fail.
  - Color contrast compliance.

## 8. State Management (Redux Toolkit)
- **Organization**: Use `createSlice`. Normalize state (flat structure).
- **Selectors**: Encapsulate access.
- **Slices**: Feature-based separation (not monolithic).

## 9. Testing & Quality
- **Unit**: Jest + RTL. Test behavior, not implementation details.
- **Integration**: Focus on workflows.
- **TDD Requirement** (If active): Red -> Green -> Refactor.
- **Linting**: No `eslint-disable`. Fix errors immediately.

## 10. Production & AI
- **Environment**: 
  - **Review**: NEVER hardcode API URLs. Use `NEXT_PUBLIC_API_URL` etc.
  - **Config**: Maintain `.env.example`.
- **Database**: Plan for schema migrations. Don't break prod DB.
- **AI Models**: 
  - Priority: Gemini 3.0 > 2.5.
  - **Documentation**: You MUST create and maintain `AI_MODELS.md` in the project root.
  - **Required Content**:
    | Service/Feature | Model Name | File Location | Purpose | Est. Cost (per 1k tokens) |
    |-----------------|------------|---------------|---------|---------------------------|
    | Example: Chat   | gemini-3.0-pro | `server/services/chat.ts:45` | User conversation handling | $0.00025 input / $0.0005 output |
  - **Update Trigger**: Every time you add, change, or remove an AI model call, update this file.

## 11. Workflow Triggers
- **Backend Logic Detection**: If writing DB/Secret logic in a Client Component -> STOP. Suggest decoupling.
- **Cross-Stack Verification**: If editing Client AND Server in one go -> STOP. Ask for confirmation.
