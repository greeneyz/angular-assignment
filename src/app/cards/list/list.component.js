(function() {
  'use strict';

  angular
    .module('angularAssignment')
    .component('cardList', {
      templateUrl: 'app/cards/list/list.html',
      controller: CardListController,
      bindings: {
        cards: '='
      }
    });

  /** @ngInject */
    function CardListController($state, uiGridConstants) {
    }
  }
)();
