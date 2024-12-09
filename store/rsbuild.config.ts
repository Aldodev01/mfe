import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "store",
      filename: "remoteEntry.js",
      exposes: {
        "./redux": "./src/redux.tsx",
      },
      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true },
        "@reduxjs/toolkit": { singleton: true, eager:true },
        "react-redux": { singleton: true, eager:true },
      },
    }),
  ],
  server: {
    port: 4000,
  },
});
