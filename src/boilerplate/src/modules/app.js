import appController from './../controllers/controllerApp';
import template from './../views/app.html'
import component from './../components/welcome';

const module = angular.module('app.module', []);
module.config(configure);
module.component('helloComponent', component);
module.controller('appController', appController);

configure.$inject = [
  'c8yNavigatorProvider',
  'c8yViewsProvider'
];

function configure(c8yNavigatorProvider, c8yViewsProvider) {
  c8yNavigatorProvider.addNavigation({
    name: 'nameToReplace',
    icon: 'cube',
    priority: 100000,
    path: 'test'
  });

  c8yViewsProvider.when('/test', {
    template
  });
}


export default module;
