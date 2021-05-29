const { build } = require('esbuild')

const formats = ['cjs', 'iife']

formats.forEach((format) => {
  build({
    bundle: true,
    target: 'es6',
    platform: 'node',
    color: true,
    sourcemap: 'external',
    logLevel: 'info',
    format,
    entryPoints: ['./src/index.ts'],
    outfile: format === 'cjs' ? './dist/typetac.js' : './dist/typetac.min.js',
    minify: true,
  })
})
