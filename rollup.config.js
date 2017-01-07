import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/index.js',
  dest: 'dist/italian-names.min.js',
  dest: process.env.NODE_ENV === 'production' ? 'dist/italian-names.min.js' : 'dist/italian-names.js',
  moduleName:'italianName',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    globals(),
    builtins(),
    resolve({
      jsnext: true,
      browser: true,
    }),
    commonjs(),
    json(), 
    babel({
      presets: [
        "es2015-rollup"],
        "plugins": [
          "external-helpers"
      ],
      babelrc: false
    }),
    (process.env.NODE_ENV === 'production' && uglify())],
};