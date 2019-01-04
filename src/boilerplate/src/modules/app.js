import myController from './../controllers/controllerApp';
import template from './../views/app.html'
import component from './../components/welcome';

const module = angular.module('test.module', []);
module.config(configure);
module.component('helloComponent', component);
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
    template
  });
}


export default module;
