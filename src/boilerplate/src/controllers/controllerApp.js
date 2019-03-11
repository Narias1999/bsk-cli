appController.$inject = [
  '$scope'
]

function appController ($scope) {
  $scope.welcome = "Welcome to your cumulocity plugin";
  $scope.greeting = "Project generated with the bismark-cli";

}

export default appController;
