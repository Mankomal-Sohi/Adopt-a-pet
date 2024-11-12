import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { plugin } from "typescript-eslint";

export default defineConfig({
  plugins: [react()],
  root: "src",
});
