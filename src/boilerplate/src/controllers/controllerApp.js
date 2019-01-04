module.exports = `myController.$inject = [
  '$scope'
]

function myController ($scope) {
  $scope.welcome = "Welcome to your cumulocity plugin";
  $scope.greeting = "Project generated with the bismark-cli";

}

export default myController;
`;