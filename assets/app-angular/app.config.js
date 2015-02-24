function GetgoingConfig(RestangularProvider) {
  RestangularProvider.setBaseUrl('/data');
}

angular.module("getgoing")
  .config(GetgoingConfig);
