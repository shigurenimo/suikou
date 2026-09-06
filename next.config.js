const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @returns {import('next').NextConfig} */
module.exports = (phase) => ({
  agentRules: false,
  ...(phase === PHASE_DEVELOPMENT_SERVER
    ? {
        allowedDevOrigins: ["suikou.io.localhost"],
        // Next dev does not serve public directory indexes automatically.
        redirects() {
          return [{ source: "/admin", destination: "/admin/index.html", permanent: false }];
        },
      }
    : { output: "export" }),
});
