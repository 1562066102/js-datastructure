// 本地测试环境-只打包umd模块，并开启本地服务器
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import packageConfig from './package.json';

export default {
  input: './src/index.ts',
  output: {
    name: 'jsDatastructure',
    file: packageConfig.main, // 通用模块
    format: 'umd',
  },
  plugins: [
    nodeResolve({
      extensions: ['.mjs', '.js', '.ts', '.json', '.node'],
    }),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    livereload(),
    serve({
      open: true,
      port: 8000,
      openPage: '/index.html',
      contentBase: '',
    }),
  ],
};
