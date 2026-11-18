## GitHub Copilot Chat

- Extension: 0.74.0 (prod)
- VS Code: 1.146.0 (69047191fc427f2f92828279aae1d90d8eeda7ab)
- OS: win32 10.0.26200 x64
- GitHub Account: jefteyr-star

## Network

User Settings:
```json
  "http.systemCertificatesNode": true,
  "telemetry.telemetryLevel": "all",
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 20.205.243.168 (93 ms)
- DNS ipv6 Lookup: Error (32 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (13 ms)
- Electron fetch (configured): HTTP 200 (43 ms)
- Node.js https: HTTP 200 (196 ms)
- Node.js fetch: HTTP 200 (154 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.112.21 (8 ms)
- DNS ipv6 Lookup: Error (7 ms): getaddrinfo ENOTFOUND api.individual.githubcopilot.com
- Proxy URL: None (6 ms)
- Electron fetch (configured): HTTP 200 (869 ms)
- Node.js https: HTTP 200 (945 ms)
- Node.js fetch: HTTP 200 (944 ms)

Connecting to https://proxy.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 138.91.182.224 (9 ms)
- DNS ipv6 Lookup: Error (7 ms): getaddrinfo ENOTFOUND proxy.individual.githubcopilot.com
- Proxy URL: None (10 ms)
- Electron fetch (configured): HTTP 200 (538 ms)
- Node.js https: HTTP 200 (595 ms)
- Node.js fetch: HTTP 200 (593 ms)

Connecting to https://mobile.events.data.microsoft.com/OneCollector/1.0?cors=true&content-type=application/x-json-stream (Electron fetch): HTTP 200 (168 ms)
Connecting to https://telemetry.individual.githubcopilot.com/telemetry (Node.js https): HTTP 200 (936 ms)
Connecting to https://default.exp-tas.com/vscode/ab (Node.js fetch): HTTP 200 (187 ms)

Number of system certificates: 74

## Notes

- Active fetcher: Electron fetch.
- For corporate networks also see: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).