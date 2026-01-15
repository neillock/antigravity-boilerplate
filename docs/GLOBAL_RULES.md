# Global Agent Rules

These rules apply to **ALL** workspaces and conversations.

## 1. GitHub Linkage (Mandatory)
- **First Question**: For every new workspace or project, ALWAYS ask: "Should this workspace be linked to a GitHub repository?"
- **If YES**:
  - Ensure a Git repository is initialized.
  - Ensure a remote is configured.
  - **All work must be done on a feature branch.** Never commit directly to `main`.
  - Every feature must be completed via a **Pull Request**.

## 2. Security First
- **No Key Leakage**: NEVER hardcode API keys, secrets, or credentials. Use `.env` files only.
- **No Exposed APIs**: All endpoints must have Auth (unless explicitly public).
- **Scan Before Commit**: Check `git diff` for secrets before every commit.

## 3. Local Environment Constraints
- **No Local Docker**: This machine does not support Docker. Always use native runtimes locally (e.g., `npm run dev`, `go run`).
- **Production Containers OK**: Generate Dockerfiles for Cloud Run / remote deployment, just don't execute them locally.

## 4. Strict PR Policy
- **No Direct Merges**: Never merge to `main` locally.
- **Action**: Push feature branches. Instruct the user to review and merge via GitHub PR.

## 5. AI Model Prioritization
- **Prefer Gemini 3.0** variants. Fallback to **Gemini 2.5** if needed.
- **Document ALL Model Usage**: Maintain `AI_MODELS.md` in the project root with:
  - **Service/Feature**: What uses the model (e.g., "Chat", "Content Generation")
  - **Model Name**: Exact model identifier (e.g., `gemini-3.0-pro`)
  - **File Location**: Where in the code the model is called (e.g., `server/services/chat.ts:45`)
  - **Purpose**: Why this model is used
  - **Estimated Cost**: Per 1k tokens input/output
- **Update Trigger**: Update `AI_MODELS.md` on EVERY commit that adds, changes, or removes AI model usage.
