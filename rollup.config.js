import commonjs from '@rollup/plugin-commonjs'
import cleanup from 'rollup-plugin-cleanup'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import ts from '@wessberg/rollup-plugin-ts'

const name = 'typetac'

export const build = (config) => {
  return {
    input: config.input,
    external: [],
    plugins: [
      ...config.plugins,
      ts(),
      commonjs(),
      cleanup({ comments: 'none', extensions: ['ts'] }),
    ],
    output: [
      {
        file: config.output,
        format: config.format,
        plugins: [
          ...config.outputPlugins,
          filesize({
            showBrotliSize: true,
            showMinifiedSize: true,
            showBeforeSizes: 'release',
            showGzippedSize: true,
          }),
        ],
        name,
        globals: {},
        strict: true,
      },
    ],
    target: config.target,
    onwarn: () => {},
  }
}

export default [
  build({
    input: './src/index.ts',
    output: 'dist/typetac.esm.js',
    outputPlugins: [],
    plugins: [],
    format: 'esm',
    target: 'es2015',
  }),
  build({
    input: './src/index.ts',
    output: 'dist/typetac.cjs.js',
    outputPlugins: [],
    plugins: [],
    format: 'cjs',
    target: 'es2015',
  }),
  build({
    input: './src/index.ts',
    output: 'dist/typetac.min.js',
    outputPlugins: [],
    plugins: [terser()],
    format: 'iife',
    target: 'es2015',
  }),
]
