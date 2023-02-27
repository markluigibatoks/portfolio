import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue/macros',
        'pinia',
        '@vueuse/head',
        '@vueuse/core'
      ],

      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],

      dts: 'src/types/auto-imports.d.ts',

      dirs: [
        'src/composables',
        'src/store'
      ],

      vueTemplate: true,

      eslintrc: {
        enabled: true
      }
    }),
    Components({
      dirs: ['src/components', 'src/assets/icons'],

      directoryAsNamespace: true,

      dts: 'src/types/components.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
