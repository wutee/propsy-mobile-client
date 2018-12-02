import {Config} from 'protractor';

export let config: Config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [
    './features/**/*.feature'
  ],

  capabilities: {
    browserName: 'chrome'
  },

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    require: 'steps/*.ts',
  },

  params: {
    env: {
      hostname: 'http://localhost:4200'
    }
  }
};
