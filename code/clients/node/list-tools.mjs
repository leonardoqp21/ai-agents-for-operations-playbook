// Connect to Stacksync MCP with an API key, list the tools, and read your workspaces.
// Read-only: it lists tools and calls workspaces_list. It changes nothing.
//
//   npm install
//   export STACKSYNC_API_KEY=...   # never hard-code or commit a key
//   node list-tools.mjs
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';

const SERVER_URL = 'https://mcp.stacksync.com/mcp';
const key = process.env.STACKSYNC_API_KEY;
if (!key) {
  console.error('Set STACKSYNC_API_KEY first.');
  process.exit(1);
}

const transport = new StreamableHTTPClientTransport(new URL(SERVER_URL), {
  requestInit: { headers: { Authorization: `Bearer ${key}` } },
});
const client = new Client({ name: 'ops-playbook-example', version: '1.0.0' });

await client.connect(transport);

const { tools } = await client.listTools();
console.log(`${tools.length} tools available`);
for (const tool of tools) console.log(`- ${tool.name}`);

const result = await client.callTool({ name: 'workspaces_list', arguments: {} });
for (const block of result.content ?? []) {
  if (block.type === 'text') console.log(block.text);
}

await client.close();
