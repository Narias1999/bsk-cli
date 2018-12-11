import myController from './../controllers/controllerApp';

const module = angular.module('test.module', []);
module.config(configure);
module.controller('myController', myController);

configure.$inject = [
  'c8yNavigatorProvider',
  'c8yViewsProvider'
];

function configure(c8yNavigatorProvider, c8yViewsProvider) {
  c8yNavigatorProvider.addNavigation({
    name: 'test',
    icon: 'cube',
    priority: 100000,
    path: 'test'
  });

  c8yViewsProvider.when('/test', {
    templateUrl: ':::PLUGIN_PATH:::/views/app.html'
  });
}


export default module;