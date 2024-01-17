// vite.config.ts
import { defineConfig } from "file:///T:/React/Shopee/Shopee/node_modules/vitest/dist/config.js";
import react from "file:///T:/React/Shopee/Shopee/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { visualizer } from "file:///T:/React/Shopee/Shopee/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var __vite_injected_original_dirname = "T:\\React\\Shopee\\Shopee";
var vite_config_default = defineConfig({
  plugins: [react(), visualizer()],
  test: {
    environment: "jsdom"
    // setupFiles: path.resolve(__dirname, './vitest.setup.js')
  },
  server: {
    port: 3e3
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      src: path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJUOlxcXFxSZWFjdFxcXFxTaG9wZWVcXFxcU2hvcGVlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJUOlxcXFxSZWFjdFxcXFxTaG9wZWVcXFxcU2hvcGVlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9UOi9SZWFjdC9TaG9wZWUvU2hvcGVlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXN0L2NvbmZpZydcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIHZpc3VhbGl6ZXIoKV0gYXMgYW55LFxuICB0ZXN0OiB7XG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbSdcbiAgICAvLyBzZXR1cEZpbGVzOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi92aXRlc3Quc2V0dXAuanMnKVxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAwXG4gIH0sXG4gIGNzczoge1xuICAgIGRldlNvdXJjZW1hcDogdHJ1ZVxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIHNyYzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJylcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRQLFNBQVMsb0JBQW9CO0FBQ3pSLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsU0FBUyxrQkFBa0I7QUFIM0IsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7QUFBQSxFQUMvQixNQUFNO0FBQUEsSUFDSixhQUFhO0FBQUE7QUFBQSxFQUVmO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsY0FBYztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
