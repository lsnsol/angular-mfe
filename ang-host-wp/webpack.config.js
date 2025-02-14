const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'test_host',

  remotes: {
    './Home': 'http://localhost:3000/_next/static/chunks/remoteEntry.js',
    './Component': 'http://localhost:4202/remoteEntry.js',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
