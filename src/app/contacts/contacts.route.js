(function() {
  'use strict';

  angular
    .module('angularAssignment')
    .config(contactsRouterConfig);

  /** @ngInject */
  function contactsRouterConfig($stateProvider) {
    $stateProvider

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

  }

})();
