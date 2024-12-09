import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'

const config = defineConfig({
  runtimeCompiler: true,
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`,
      'vue': 'vue/dist/vue.esm.js'
    },
  },

  build: {
    minify: true,
  },

  plugins: [
    vue(),
    Components({
      resolvers: [
        // IconsResolver({
        //   componentPrefix: '',
        // }),
      ],
      dts: 'src/components.d.ts',
    }),
    // Icons(),
    // AutoImport({
    //   imports: [
    //     '@vueuse/core',
    //   ],
    //   dts: 'src/auto-imports.d.ts',
    // }),
  ],

  server: {
    port: 3333,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'https://api.iostdex.club/api', // Use the environment variable for API URL
        changeOrigin: true,  // Modify the origin of the request
        secure: false,       // Set to false if using HTTP in development
      },
      // '/socket': {
      //   target: process.env.VITE_SOCKET_URL || 'https://ws.iostdex.club', // Use the environment variable for WebSocket URL
      //   ws: true,             // Enable WebSocket proxying
      //   changeOrigin: true,
      // },
      // '/socketIost': {
      //   target: process.env.VITE_SOCKET_IOST_URL || 'https://ws.iostdex.club',
      //   ws: true,
      //   changeOrigin: true,
      // },
    },
  },
})

export default config
