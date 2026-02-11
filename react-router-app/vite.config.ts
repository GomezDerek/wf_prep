import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/wf_prep/", // for GH pages
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
