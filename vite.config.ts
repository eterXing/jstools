import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "lib"),
        },
    },
    build: {
        lib: {
            entry: "./src/main.ts",
            name: "index",
            fileName: "index",
        },
    },
})
