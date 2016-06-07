var simplyToDo = angular.module('simplyToDo', []);

simplyToDo.controller('listController', function ($scope) {
    $scope.items = [
        {
            name: 'Bread',
            price: .99
                      },
        {
            name: 'Milk',
            price: 2.43
                      },
        {
            name: 'Beef',
            price: 4.98
                      }
                      ];
});