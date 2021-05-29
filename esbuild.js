const { build } = require('esbuild')

build({
  bundle: true,
  target: 'es6',
  platform: 'node',
  color: true,
  sourcemap: 'external',
  logLevel: 'info',
  format: 'cjs',
  entryPoints: ['./src/index.ts'],
  outfile: './dist/typetac.js',
  minify: true,
})
