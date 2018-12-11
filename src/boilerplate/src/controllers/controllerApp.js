module.exports = `myController.$inject = [
  '$scope'
]

function myController ($scope) {
  $scope.saludo = 'Project created with bismark-cli';
}

export default myController;
`;