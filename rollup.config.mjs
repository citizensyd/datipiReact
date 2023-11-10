import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
const packageJson = require('./package.json');

export default {
    input: 'src/index.js',
    external: ['styled-components', 'react'],
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            name: 'test-modal-for-me'
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
            name: 'test-modal-for-me'
        }
    ],
    plugins: [
        external(),
        resolve(),
        commonjs(),
        postcss({
            modules: true
        }),
        terser(),
        babel({
            presets: ['@babel/preset-react'],
            babelHelpers: 'bundled',
        })
    ],
}
