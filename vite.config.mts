import { defineConfig } from 'vite-plus'

export default defineConfig({
  lint: {
    ignorePatterns: ['dist/**', 'src/docs/**'],
  },
  fmt: {
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 80,
    sortPackageJson: false,
    ignorePatterns: ['dist/**', 'src/docs/**', 'src/genDocs.ts'],
  },
  test: {
    include: ['src/**/*.test.ts'],
  },
  pack: {
    entry: {
      typetac: './src/index.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    outDir: 'dist',
    minify: true,
    sourcemap: true,
    hash: false,
    target: 'es2015',
  },
})
