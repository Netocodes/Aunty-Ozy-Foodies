import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/Aunty-Ozy-Foodies/",
  plugins: [
    tailwindcss(), // Add Tailwind CSS as a plugin
  ],
});
