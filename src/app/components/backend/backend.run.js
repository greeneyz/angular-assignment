(function() {
  'use strict';

  angular
    .module('angularAssignment.backend')
    .run(BackendIntercepts);

  /** @ngInject Contacts */
  function BackendIntercepts($log, $httpBackend, contactsData, contactTemplate) {
    $log.debug('Mock backend init');

    var idCounter = contactsData.length + 1;

    var log = function(method, url) {
      $log.debug('API: ' + method + ' ' + url);
    };

    $httpBackend.whenGET(/\/contacts$/).respond(function(method, url) {
      log(method, url);
      return [200, contactsData, {}];
    });

    $httpBackend.whenGET(/\/contacts\/[0-9]+$/).respond(function(method, url) {
      log(method, url);
      var index = url.match(new RegExp('[0-9]+$'))[0] - 1;
      return [200, contactsData[index], {}];
    });

    $httpBackend.whenPOST(/\/contacts$/).respond(function(method, url, data) {
      log(method, url);
      var contact = angular.merge({}, contactTemplate, angular.fromJson(data), { id: idCounter++ });
      contactsData.push(contact);
      return [200, contact, {}];
    });

    $httpBackend.whenPUT(/\/contacts\/[0-9]+$/).respond(function(method, url, data) {
      log(method, url);
      var index = url.match(new RegExp('[0-9]+$'))[0] - 1;
      var contact = angular.merge(contactsData[index], angular.fromJson(data));
      return [200, contact, {}];
    });

    $httpBackend.whenGET(/[\s\S]*/).passThrough();

  }

  /** @ngInject Cards */
  function BackendIntercepts($log, $httpBackend, cardsData, cardTemplate) {
    $log.debug('Mock backend init');

    var idCounter = cardsData.length + 1;

    var log = function(method, url) {
      $log.debug('API: ' + method + ' ' + url);
    };

    $httpBackend.whenGET(/\/cards$/).respond(function(method, url) {
      log(method, url);
      return [200, cardsData, {}];
    });

    $httpBackend.whenGET(/\/cards\/[0-9]+$/).respond(function(method, url) {
      log(method, url);
      var index = url.match(new RegExp('[0-9]+$'))[0] - 1;
      return [200, cardsData[index], {}];
    });

    $httpBackend.whenPOST(/\/cards$/).respond(function(method, url, data) {
      log(method, url);
      var card = angular.merge({}, cardTemplate, angular.fromJson(data), { id: idCounter++ });
      cardsData.push(card);
      return [200, card, {}];
    });

    $httpBackend.whenPUT(/\/cards\/[0-9]+$/).respond(function(method, url, data) {
      log(method, url);
      var index = url.match(new RegExp('[0-9]+$'))[0] - 1;
      var card = angular.merge(cardsData[index], angular.fromJson(data));
      return [200, card, {}];
    });

    $httpBackend.whenGET(/[\s\S]*/).passThrough();

  }

})();
