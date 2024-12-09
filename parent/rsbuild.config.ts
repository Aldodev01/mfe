import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  server: {
    compress: true,
    port: 2000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
        "mode": "no-cors",
    },
  },
  mode: "development",
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      getPublicPath: "https://mfe-child.netlify.app",
      name: "parent",
      remotes: {
        child: "child@https://mfe-child.netlify.app/mf-manifest.json",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        tailwindcss: { singleton: true, eager: true },
        "postcss": { singleton: true, eager: true },
      },
    }),
  ],
});
