(function() {
  'use strict';

  angular
    .module('angularAssignment')
    .factory('contactsApi', ContactsApi);

  angular
    .module('angularAssignment')
    .factory('cardsApi', CardsApi);

  /** @ngInject Contacts */
  function ContactsApi($resource, apiEndpoint) {
    return $resource(
      apiEndpoint.url + 'contacts/:id',
      { id: '@id' },
      { update: { method:'PUT' } }
    );
  }

/** @ngInject Cards */
function CardsApi($resource, apiEndpoint) {
    return $resource(
      apiEndpoint.url + 'cards/:id',
      { id: '@id' },
      { update: { method:'PUT' } }
    );
  }

})();
