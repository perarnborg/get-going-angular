function CareertwinConfig(RestangularProvider) {
  RestangularProvider.setBaseUrl('/data');
}

angular.module("getgoing")
  .config(CareertwinConfig);
