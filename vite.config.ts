// import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { externalizeDeps } from "vite-plugin-externalize-deps";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  build: {
    lib: {
      entry: { "hooks/index": "src/hooks/index.ts" },
      formats: ["es"],
      fileName: (_, entryName) => `${entryName}.js`,
    },
    outDir: "dist/es",
  },
  plugins: [
    externalizeDeps({
      except: ["react-compiler-runtime"],
    }),
    svgr({
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          floatPrecision: 2,
        },
      },
    }),
    // react({
    //   babel: {
    //     plugins: [
    //       [
    //         "babel-plugin-react-compiler",
    //         {
    //           target: "18",
    //         },
    //       ],
    //     ],
    //   },
    // }),
  ],
});
