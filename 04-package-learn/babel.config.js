const plugins = [
    ['@babel/plugin-transform-runtime', {
        corejs: 3
    }]
]

const presets = [
    ['@babel/env']
]

export default { plugins, presets }



//json文件书写方式
// {
//     "plugins": [
//     "@babel/plugin-transform-arrow-functions",
//     "@babel/plugin-transform-destructuring"
//     ],
//     "presets": [
//         [
//             "@babel/preset-env",
//             {
//                 "targets": {
//                     "chrome":"108"
//                 },
//                 "modules":"commonjs",
//                 "useBuiltIns":"usage"
//             }
//         ]
//     ]
// }