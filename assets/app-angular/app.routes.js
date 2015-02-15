/**
 * @ngInject
 */
function Routes($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app-angular/example/exampleView.html',
      controller: 'ExampleCtrl',
      controllerAs: 'example',
      resolve: ExampleCtrl.resolve
    });
}

angular.module("getgoing")
  .config(Routes);
