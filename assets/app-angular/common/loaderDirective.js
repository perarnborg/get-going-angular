/**
 * @ngInject
 */
function LoaderDirective($rootScope) {
  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      $rootScope.$on('$routeChangeStart', function () {
        $element.removeClass('ng-hide');
      });
      $rootScope.$on('$routeChangeSuccess', function () {
        $element.addClass('ng-hide');
      });
    }
  };
}
angular
  .module('getgoing')
  .directive('loader', LoaderDirective);
