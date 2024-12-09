import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "parent",
      remotes: {
        child: "child@http://localhost:3000/mf-manifest.json",
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
    port: 2000,
  },
});
