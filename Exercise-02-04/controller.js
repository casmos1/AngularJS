angular.module('maintenance', [])
  .controller('siteEditCtrl', SiteEditCtrl);

function SiteEditCtrl($scope) {
  $scope.sites = sites;
  $scope.startAdd = startAdd;
  $scope.cancel = cancel;
  $scope.add = add;
  $scope.startRemove = startRemove;
  $scope.remove = remove;
  $scope.getSelected = getSelected;

  setView('list');

  function setView(view) {
    $scope.view = view;
  }

  function startAdd() {
    $scope.siteBox = '';
    setView('add');
  }

  function cancel() {
    setView('list');
  }

  function add() {
    $scope.sites.push($scope.siteBox);
    setView('list');
  }

  function startRemove(index) {
    selected = index;
    setView('delete');
  }

  function remove() {
    $scope.sites.splice(selected, 1);
    setView('list');
  }

  function getSelected() {
    return sites[selected];
  }
}