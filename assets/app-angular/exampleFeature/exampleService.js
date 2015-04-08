/**
 * @ngInject
 */
function ExampleService(Restangular) {
  var service = {};

  service.listItems = null;
  service.getListItems = function() {
    return Restangular.all('list-items').getList().then(function(data) {
      service.listItems = data;
      return service.listItems
    }, function(){
      service.listItems = []
      return service.listItems
    });
  };

  return service;
}
angular.module("example")
  .factory("ExampleService", ExampleService);
