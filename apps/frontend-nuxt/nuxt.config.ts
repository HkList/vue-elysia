// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui", "nuxt-elysia"],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  alias: {
    "@backend/elysia": resolve(__dirname, "../backend/src/services/elysia.ts"),
    "@backend": resolve(__dirname, "../backend/src"),
    "@backend/db": resolve(__dirname, "../backend/src/db/index.ts"),
  },

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  typescript: {
    tsConfig: {
      compilerOptions: {
        allowImportingTsExtensions: true,
        baseUrl: ".",
        paths: {
          "@backend/*": ["../backend/src/*"],
          "@backend/db": ["../backend/src/db/index.ts"],
          "@backend/elysia": ["../backend/src/services/elysia.ts"],
        },
      },
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },

  nuxtElysia: {
    module: "~/api.ts",
  },
});
