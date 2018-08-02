describe('personasComponent', function() {
var $controller, personasComponent;
    // Load ui.router and our components.users module which we'll create next
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('ngResource'));
    beforeEach(angular.mock.module('oc.lazyLoad'));
    beforeEach(angular.mock.module('mpApp'));
    beforeEach(angular.mock.module('mpApp.ui'));
    beforeEach(angular.mock.module('mpApp.public'));
    // Add the module for our Users service

    beforeEach(inject(function(_$controller_) {
      $controller = _$controller_;
      personasComponent = $controller('personasComponent', {});
    }));
  


});