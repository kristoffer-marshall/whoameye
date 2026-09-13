# Agent Instructions & Conventions

## General Principles
- Make all changes in the industry standard way according to the language/framework best practices.
- Favor maintainability, explicit typing, and readability over clever one-liners.
- Keep functions modular, pure where possible, and avoid premature abstraction.
- Split functionality into separate files/modules as needed, where the point of entry is clear, to keep codebase organized and maintainable.

## Code Style & Standards
- Enforce standard error handling (e.g., explicit error propagation rather than swallowing exceptions).
- Do not introduce external dependencies unless strictly necessary and widely adopted.
- Ensure any added or modified functions include corresponding unit tests adhering to standard test patterns.

## Git
- Automatically git add any appropriate files, and update .gitignore as needed.
- Do not commit sensitive data (e.g., API keys, credentials) directly to the repository.
- Do not push without explicit approval.
- If the user says that something isn't working, it's not a Git issue, treat it as a local issue.
