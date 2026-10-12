# Agent instructions

<!-- aiw:start -->
## AI Workspace (shared task state)

This repo keeps task state in `.aiw/`, shared by every AI agent that works here (Claude Code, Codex, Copilot, ...).

- At the start of a session, call `get_context` on the `aiw` MCP server. If the tool is unavailable, read `.aiw/handoff.md`.
- No active task? Call `start_task` with the user's goal and your planned steps.
- After finishing each step, call `update_task` (mark it done) and `checkpoint` with a one-line summary.
- Record design choices with `record_decision` and problems with `log_issue`.
- Never edit files in `.aiw/` directly.
<!-- aiw:end -->
