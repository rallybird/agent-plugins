import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://rallybird.github.io",
  // Set DOCS_BASE=/ to serve at the root locally. The Pages build uses the
  // project path until a custom domain makes it "/".
  base: process.env.DOCS_BASE ?? "/agent-plugins",
  integrations: [
    starlight({
      title: "Rallybird",
      description:
        "Documentation for the Rallybird MCP server and agent plugins for Claude and Codex.",
      logo: {
        light: "./src/assets/logo.svg",
        dark: "./src/assets/logo-dark.svg",
        alt: "Rallybird",
        replacesTitle: true,
      },
      favicon: "/favicon.svg",
      components: {
        Header: "./src/components/Header.astro",
        Footer: "./src/components/Footer.astro",
      },
      customCss: ["./src/styles/brand.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/rallybird/agent-plugins",
        },
      ],
      sidebar: [
        { label: "Overview", slug: "index" },
        { label: "Install", slug: "install" },
        { label: "MCP server", slug: "mcp-server" },
        { label: "Tools", slug: "tools" },
        { label: "Skills", slug: "skills" },
        { label: "Privacy and security", slug: "security" },
      ],
    }),
  ],
});
