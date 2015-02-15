/**
 * @ngInject
 */
function ExampleCtrl(ExampleService, listItems) {
  this.currentUser = AuthenticationService.currentUser;
  if(this.currentUser) {
    this.twins = ExampleService.twins;
  } else {
    window.location = '/oauth/signin';
  }
}

ExampleCtrl.resolve = {
  listItems: function (ExampleService) {
    return ExampleService.getListItems();
  }
};
angular
  .module('example')
  .controller('ExampleCtrl', ExampleCtrl);

