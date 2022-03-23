module.exports = {
  moduleFileExtensions: ['vue', 'js', 'ts', 'tsx'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest', // vue 文件用 vue-jest 转换
    '^.+\\.ts$': 'ts-jest' // ts 文件用 ts-jest 转换
  },
  // 匹配 __tests__ 目录下的 .js/.ts 文件 或其他目录下的 xx.test.js/ts xx.spec.js/ts
  testRegex: '(/__tests__/*|(\\.|/)(test|spec))\\.(ts|tsx)$',
  //testRegex: '__tests__.action.spec.ts',
  // 支持源代码中相同的 `@` -> `src` 别名
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  // 是否开启将测试覆盖率信息输出为报告
  collectCoverage: true,
  // 报告应从那些文件中收集
  collectCoverageFrom: [
    'src/packages/__VUE/**/*.{js,jsx,ts,tsx,vue}',
    '!**/node_modules/**',
    '!**/demo.vue/**',
    '!**/index.taro.vue/**'
  ]
};
