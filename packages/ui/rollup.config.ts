import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-porter';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
        },
        {
            file: pkg.module,
            format: 'es',
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        css({
            minified: 'lib/ui.min.css',
        }),
        typescript({
            useTsconfigDeclarationDir: true,
        }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};
