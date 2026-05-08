# Cloudflare Worker Proxy for CamoFlow SSE
# This handles the connection persistence and proxying to Cloud Run.

# wrangler.toml
# name = "camoflow-sse-proxy"
# main = "src/index.ts"
# compatibility_date = "2023-01-01"

# src/index.ts
# export default {
#   async fetch(request, env, ctx) {
#     const url = new URL(request.url);
#     if (url.pathname === "/api/events") {
#       return fetch("https://camoflow-core-cloud-run/api/events", {
#         headers: request.headers,
#       });
#     }
#     return fetch(request);
#   },
# };
