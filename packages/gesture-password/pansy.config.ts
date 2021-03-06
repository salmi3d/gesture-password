import { Config } from '@walrus/pansy';

const config: Config = {
  output: {
    format: ['cjs', 'esm', 'umd'],
    moduleName: 'gesturePassword'
  },
  disableTypeCheck: true
};

export default config;
