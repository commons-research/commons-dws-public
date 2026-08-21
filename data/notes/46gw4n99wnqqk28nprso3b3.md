# [Use MCP servers in VS Code](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)
## VS Code — MCP (Model Context Protocol) Overview
**MCP** lets AI models access external tools/services (file system, APIs, DBs, Rust analyzer, etc.) through a standard interface.  
VS Code supports MCP starting in **v1.102+** and Copilot is required.
### Key Concepts
- MCP servers = external tool providers
- Used alongside VS Code's built-in + extension tools
- Works inside Copilot Chat
### Prereqs
- Latest VS Code
- Copilot access
## Enabling & Managing MCP
### Settings
- `chat.mcp.access`
    - `all` _(default)_
    - `registry` _(only registry servers)_
    - `none`
### Add MCP servers
Ways to register a server:
- Install from Extensions → MCP
- Add to `mcp.json` in workspace or user config
- Dev containers support
- Auto-discover
- CLI install `code --add-mcp "{\"name\":\"my-server\",\"command\": \"uvx\",\"args\": [\"mcp-server-fetch\"]}"`
### Trust Model
- MCP servers run code ➝ trust prompt on first run
- You can revoke trust with `MCP: Reset Trust`
## Using MCP in Chat
- Agent mode auto-invokes tools
- Explicit tool call: `#tool-name`
- Add MCP resources: _Chat → Add Context → MCP Resources_
- MCP prompts: `/mcp.server.prompt`
### Cached Tools
Clear cache: `MCP: Reset Cached Tools`
## Tool Organization
- Group tools via **tool sets**
- Manage servers: start/stop, logs, uninstall via:
    - Extensions view
    - `mcp.json` lenses
    - Command Palette → `MCP: List Servers`
Autostart config:
- `chat.mcp.autostart` _(experimental)_
## Finding MCP Servers
- GitHub MCP registry
- VS Marketplace extensions
- Official MCP repo (examples + community servers)
## Config Structure (`mcp.json`)
### Sections
```
servers: { ... }
inputs: [ ... ]   // for secrets like API keys
```
### Local (stdio) server example
- `type: "stdio"`
- `command`, optional `args`, `env`, `.env`
### HTTP/SSE server example
- `type: http/sse`
- `url`
- optional auth headers
Supports Unix sockets + Windows pipes.
### Inputs
Secure prompts for secrets (API keys, etc.)
## Debugging & Dev
- View server logs through MCP panel / Command Palette
- Dev mode: auto-restart, debugging Node/Python MCP servers
- See **MCP Dev Guide** for more
## FAQ Notes
- Toggle tools on/off in Chat Tools picker
- Limit: **max 128 tools per chat request**
- Docker servers must run in foreground
## Related
- Model Context Protocol docs
- Official MCP registry repo
- VS Code agent mode docs