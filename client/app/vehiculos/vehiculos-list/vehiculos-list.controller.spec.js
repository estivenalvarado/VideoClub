'use strict';

describe('Component: VehiculosListComponent', function () {

  // load the controller's module
  beforeEach(module('videoClubApp'));

  var VehiculosListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    VehiculosListComponent = $componentController('vehiculos-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
