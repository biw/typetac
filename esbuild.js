const { build } = require('esbuild')

build({
  bundle: true,
  target: ['es6', 'node6'],
  platform: 'node',
  sourcemap: 'external',
  entryPoints: ['./src/index.ts'],
  outfile: './dist/typetac.js',
  minify: true,
})
