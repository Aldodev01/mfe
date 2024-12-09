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
        "./zustand": "./src/zustand.tsx",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        // tailwindcss: { singleton: true, eager: true },
        // "postcss": { singleton: true, eager: true },
        // "zustand": { singleton: true, eager: true },
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
