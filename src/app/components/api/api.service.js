(function() {
  'use strict';

  angular
    .module('angularAssignment')
    .factory('contactsApi', ContactsApi);

  /** @ngInject */
  function ContactsApi($resource, apiEndpoint) {
    return $resource(
      apiEndpoint.url + 'contacts/:id',
      { id: '@id' },
      { update: { method:'PUT' } }
    );
  }


})();
