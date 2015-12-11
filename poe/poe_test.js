'use strict';

describe('myApp.poe module', function() {

  beforeEach(module('myApp.poe'));

  describe('poe controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var poeCtrl = $controller('PoeCtrl');
      expect(poeCtrl).toBeDefined();
    }));

  });
});