"""Connect to Stacksync MCP with an API key, list the tools, and read your workspaces.

Read-only: it lists tools and calls workspaces_list. It changes nothing.

Setup:
    pip install -r requirements.txt
    export STACKSYNC_API_KEY=...   # never hard-code or commit a key
    python list_tools.py
"""
import asyncio
import os
import sys

from mcp import ClientSession
from mcp.client.streamable_http import streamablehttp_client

SERVER_URL = "https://mcp.stacksync.com/mcp"


async def main() -> None:
    key = os.environ.get("STACKSYNC_API_KEY")
    if not key:
        sys.exit("Set STACKSYNC_API_KEY first.")

    headers = {"Authorization": f"Bearer {key}"}
    async with streamablehttp_client(SERVER_URL, headers=headers) as (read, write, _):
        async with ClientSession(read, write) as session:
            await session.initialize()

            tools = await session.list_tools()
            print(f"{len(tools.tools)} tools available")
            for tool in tools.tools:
                print(f"- {tool.name}")

            result = await session.call_tool("workspaces_list", {})
            for block in result.content:
                if getattr(block, "text", None):
                    print(block.text)


if __name__ == "__main__":
    asyncio.run(main())
