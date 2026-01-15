---
description: Standard procedure for initializing a new project. Establishes deployment and data requirements.
---

# Project Initiation Workflow

Follow this questionnaire to determine the project's architectural constraints.

1. **Deployment Target**
   - ASK: "Is this application intended for local development/testing only, or do you plan to push it to production?"
   - IF **Local**: Continue to Step 2.
   - IF **Production**: Continue to Step 2.

2. **Architecture & Decoupling**
   - ASK: "Do you want to decouple the backend and frontend application logic?"
     - Context: "Decoupling separates the UI (React) from the business logic/API key handling (Node/Express/Functions). This is recommended for security and scalability."
   - IF **Yes**:
     - Plan for a `client/` and `server/` structure (or separate repositories).
     - Ensure no sensitive logic goes into `client/`.
   - IF **No**:
     - Plan for an integrated structure (e.g., standard SPA or Next.js with API routes if applicable).

3. **Development Methodology**
   - ASK: "Do you want to follow a Test Driven Development (TDD) approach?"
   - IF **Yes**:
     - The project will require strict "Test First" workflows (Red-Green-Refactor).
   - IF **No**:
     - Standard development (Write code -> Verify).

4. **Data Requirements (Production Only)**
   - IF (From Step 1 was **Local**): Skip to End (unless user explicitly wants to treat local like prod).
   - ASK: "Does this application require persistent data storage?"
   - IF **No**: Proceed with stateless architecture (e.g., static site, simple container).
   - IF **Yes**: Continue to Step 5.

5. **Cloud Service Selection (Production + Data)**
   - ASK: "Which cloud service do you prefer for data storage?"
     - Options to suggest:
       - **Firebase Realtime Database**: For low-latency syncing.
       - **Firestore**: For flexible, scalable document storage.
       - **Cloud SQL**: For relational data (Postgres/MySQL).
       - **Other**: User defined.
   - ACTION: Record the choice and configure the project accordingly (e.g., generate `firebase.json` or Cloud SQL connection logic).
