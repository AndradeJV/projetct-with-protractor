module.exports = provideConfig => {
  const defaultConfig = {
    baseUrl: 'https://www.saucedemo.com',
    specs: ['../specs/*.spec.js'],
    onPrepare: () => { browser.waitForAngularEnabled(false) },
    jasmineNodeOpts: { random: true }

  }

  return Object.assign(
    {},
    defaultConfig,
    provideConfig
  )
}
