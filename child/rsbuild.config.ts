import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "child",
      exposes: {
        "./CMPButton": "./src/CMPButton.tsx",
      },
      remotes: {
        parent: "parent@http://localhost:2000/mf-manifest.json",
        store: "store@http://localhost:4000/mf-manifest.json",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        tailwindcss: { singleton: true, eager: true },
        "postcss": { singleton: true, eager: true },
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
