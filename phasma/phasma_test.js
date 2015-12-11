'use strict';

describe('myApp.phasma module', function() {

  beforeEach(module('myApp.rey'));

  describe('phasma controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var phasmaCtrl = $controller('PhasmaCtrl');
      expect(phasmaCtrl).toBeDefined();
    }));

  });
});