function ListaComprasController($scope) {

    $scope.item = {};

    $scope.itens = [
        {id: 0, produto: 'Picanha', quantidade: 1, comprado: false},
        {id: 1, produto: 'Soja', quantidade: 5, comprado: false},
        {id: 2,produto: 'Coca-Cola', quantidade: 4, comprado: false},
        {id: 4,produto: 'Vinho', quantidade: 4, comprado: true}
    ];
     $scope.user = {
    roles: ['user']
  };
  $scope.checkAll = function() {
    $scope.user.roles = angular.copy($scope.roles);
  };
  $scope.uncheckAll = function() {
    $scope.user.roles = [];
  };
  $scope.checkFirst = function() {
    $scope.user.roles.splice(0, $scope.user.roles.length); 
    //$scope.user.roles.push('guest');
  };
    $scope.adicionaItem = function () {
        $scope.itens.push({produto: $scope.item.produto, quantidade: $scope.item.quantidade, comprado: false});
        $scope.item.produto = $scope.item.quantidade = '';
    };

    $scope.editarItem = function(index){
        $scope.item = $scope.itens[index];
        $scope.edit = true;
    };

    $scope.applyChanges = function(index){
        $scope.item = {};
        $scope.edit = false;
    };

    $scope.deleteItem = function(index){
        $scope.itens.splice(index, 1);
    };
     $scope.linkVar = 'contas.html';
      $scope.changeLink = function($index) {
          $scope.linkVar = $scope.topics[$index].play; //or whatever else you want to be in href
      };
}