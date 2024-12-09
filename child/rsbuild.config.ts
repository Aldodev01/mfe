import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  resolve: {
    alias: (opts) => {
      opts['@zustand'] = './src/zustand.tsx';
    },
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "child",
      exposes: {
        "./CMPButton": "./src/CMPButton.tsx",
        "./zustand": "./src/zustand.tsx",
        "./Global": "./src/Global.tsx",
        "./Recheiver": "./src/Recheiver.tsx",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
