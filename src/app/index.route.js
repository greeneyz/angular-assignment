(function() {
  'use strict';

  angular
    .module('angularAssignment')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        abstract: true,
        url: '/',
        views: {
          app: {
            template: '<container></container>'
          }
        }
      })

      .state('app.home', {
        url: '',
        views: {
          main: {
            template: '<home></home>'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
