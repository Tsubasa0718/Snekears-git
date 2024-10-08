import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import combineMediaQuery from 'postcss-combine-media-query';
import sortMediaQueries from 'postcss-sort-media-queries';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import sass from 'sass';

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        injectData: {
          title: 'My App',
        },
      },
    }),
    viteStaticCopy({
      targets: [
        { src: 'src/images/*', dest: 'images' },
        { src: 'src/video/*', dest: 'video' },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'src/js/index.js',
        style: 'src/scss/style.scss',
        html: 'index.html',
      },
      output: {
        entryFileNames: 'js/[name].js',
        assetFileNames: 'css/[name].css',
        chunkFileNames: 'js/[name].js',
      },
    },
    sourcemap: true,
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['> 1%', 'last 2 versions', 'Firefox ESR'],
        }),
        combineMediaQuery(),
        sortMediaQueries(),
      ],
    },
  },
});
