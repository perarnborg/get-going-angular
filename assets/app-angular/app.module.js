angular
  .module("getgoing", [
    "ngRoute",
    "restangular",
    "example"
  ])
  .run(function () {
  });

angular
  .module("example", [
    "restangular"
  ]);
