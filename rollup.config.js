// 本地测试环境-只打包umd模块，并开启本地服务器
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import {uglify} from 'rollup-plugin-uglify';
import packageConfig from './package.json';

// 编译的两种模块
const compileModules = [
  {
    name: 'jsDatastructure',
    file: packageConfig.main, // 通用模块
    format: 'umd',
  },
  {
    name: packageConfig.name,
    file: packageConfig.module, // es6模块
    format: 'es',
  },
];

export default compileModules.map(output => {
  return {
    input: './src/index.ts',
    output,
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
      uglify(),
    ],
  };
});
