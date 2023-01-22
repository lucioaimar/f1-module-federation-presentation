const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'f1-login',

  exposes: {
    './LoginRoutes': './projects/f1-login/src/app/login/login.routes.ts',
    './LoginGuard': './projects/f1-login/src/app/login/login.guard.ts',
    './UserHeader': './projects/f1-login/src/app/login/user-header.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
