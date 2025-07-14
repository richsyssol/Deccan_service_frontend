import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },

    css: {
        postcss: "./postcss.config.js", // Points to external postcss config
    },

    server: {
        historyApiFallback: true,
        port: 3000,
        open: true,
    },

    base: "/",

    build: {
        outDir: "dist",
        assetsDir: "assets",
        sourcemap: true,
        chunkSizeWarningLimit: 1500, // Increase chunk size warning limit (size in KB)
    },

    preview: {
        port: 4173,
        open: true,
    },
});
