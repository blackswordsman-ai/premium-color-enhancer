import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'named'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'PremiumColorEnhancer',
      exports: 'named'
    },
    {
      file: 'dist/index.min.js',
      format: 'umd',
      name: 'PremiumColorEnhancer',
      exports: 'named',
      plugins: [terser()]
    }
  ],
  plugins: [
    resolve(),
    commonjs()
  ]
};
