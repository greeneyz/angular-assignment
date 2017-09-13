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
    var ctrl = this;

    ctrl.create = function () {
      $state.go('app.cards.create');
    };

    ctrl.grid = {
      data: ctrl.cards,
      exporterMenuCsv: true,
      enableGridMenu: true,
      enableFiltering: true,
      enableHorizontalScrollbar: 2,
      enableVerticalScrollbar: 2,
      columnDefs: [
        { name: 'isActive', displayName: 'Active', width: 70, cellClass: 'text-center', cellTemplate:
          '<div class="ui-grid-cell-contents"><span class="label" ng-class="{\'label-success\':COL_FIELD, \'label-danger\':!COL_FIELD}">{{ COL_FIELD ? "YES" : "NO" }}</span></div>',
          enableFiltering: false
        },
        { name: 'firstName', displayName: 'First name', width: 150, cellTemplate:
          '<div class="ui-grid-cell-contents"><a href="" ui-sref="app.contacts.view({ id: row.entity.id })">{{ COL_FIELD }}</a></div>'
        },
        { name: 'surName', displayName: 'Surname', width: 150, cellTemplate:
          '<div class="ui-grid-cell-contents"><a href="" ui-sref="app.contacts.view({ id: row.entity.id })">{{ COL_FIELD }}</a></div>',
          sort: { direction: uiGridConstants.ASC, priority: 1 }
        },
        { name: 'company', displayName: 'Company', width: 150 },
        { name: 'email', displayName: 'Email', width: 225 },
        { name: 'phone', displayName: 'Phone', width: 150 },
        { name: 'tags', displayName: 'Tags', minWidth: 150, cellTemplate:
          '<div class="ui-grid-cell-contents text-muted">{{ (COL_FIELD || []).join(", ") }}</div>'
        }
      ]
    };

  }
})();
