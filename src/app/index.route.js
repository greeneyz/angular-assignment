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
        url: 'home',
        views: {
          main: {
            template: '<home></home>'
          }
        }
      })

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
          cardsApi: 'cardsApi',
          cards: function(cardsApi) {
            return cardsApi.query().$promise;
          }
        }
      })

      /**Contacts */
    .state('app.contacts', {
        url: 'contacts',
        views: {
          main: {
            template: '<contact-list contacts="contacts"></contact-list>',
            controller: function ($scope, contacts) {
              $scope.contacts = contacts;
            }
          }
        },
        resolve: {
          contactsApi: 'contactsApi',
          contacts: function(contactsApi) {
            return contactsApi.query().$promise;
          }
        }
      })

      .state('app.contacts.view', {
        url: '/{id:int}',
        views: {
          'main@app': {
            template: '<contact-view contact="contact"></contact-view>',
            controller: function ($scope, contact) {
              $scope.contact = contact;
            }
          }
        },
        resolve: {
          /** @ngInject */
          contact: function($stateParams, contactsApi) {
            return contactsApi.get({ id: $stateParams.id }).$promise;
          }
        }
      })

      .state('app.contacts.create', {
        url: '/create',
        views: {
          'main@app': {
            template: '<contact-form contact="contact"></contact-form>',
            controller: function ($scope, contact) {
              $scope.contact = contact;
            }
          }
        },
        resolve: {
          contact: function() {
            return { id: null, isActive: true }
          }
        }
      })

      .state('app.contacts.edit', {
        url: '/{id:int}/edit',
        views: {
          'main@app': {
            template: '<contact-form contact="contact"></contact-form>',
            controller: function ($scope, contact) {
              $scope.contact = contact;
            }
          }
        },
        resolve: {
          /** @ngInject */
          contact: function($stateParams, contactsApi) {
            return contactsApi.get({ id: $stateParams.id }).$promise;
          }
        }
      });


    $urlRouterProvider.otherwise('/');
  }

})();
