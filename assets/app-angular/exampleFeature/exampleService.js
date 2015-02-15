/**
 * @ngInject
 */
function ExampleService(Restangular) {
  var service = {};

  service.listItmes = null;
  service.getListItems = function() {
    return Restangular.all('list-items').getList().then(function(data) {
      service.listItmes = data;
      return service.listItmes
    }, function(){
      service.listItmes = []
      return service.listItmes
    });
  };

  return service;
}
angular.module("example")
  .factory("ExampleService", ExampleService);
