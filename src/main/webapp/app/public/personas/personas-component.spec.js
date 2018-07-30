describe('personasController', function() {
var $controller, personasController;
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
      personasController = $controller('personasController', {});
    }));

    it('should be defined', function() {
      expect(personasController).toBeDefined();
    });
    
    // Add a new test for our expected controller behavior
    it('should return test', function() {
      expect(personasController.dev.foo).toEqual('test');
    });
    


});