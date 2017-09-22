(function() {
  'use strict';

  angular
    .module('angularAssignment')
    .config(cardsRouterConfig);

  /** @ngInject */
  function cardsRouterConfig($stateProvider) {
    $stateProvider

      .state('app.cards', {
        url: 'cards',
        views: {
          main: {
            template: '<card-list cards="cards"></card-list>',
            controller: function ($scope, cards) {
              $scope.cards = cards;
            }
          }
        },
        resolve: {
          cardsApi: 'contactsApi',
          cards: function(contactsApi) {
            return contactsApi.query().$promise;
          }   

        }
      })

      
  }

})();
