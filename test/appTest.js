const assert = require('chai').assert;
const app = require('../app');

const start = app.start();
const validNumber = app.nuberTest();

describe('App', function(){
  describe('Init App', function(){
    it('it should return app', function(){
      assert(app, 'app file didnt find');
    })
  });

  describe('Valid string', function(){
    it('it should return string', function(){
      assert.typeOf(start, 'string');
    })
  });

  describe('Valid string value', function(){
    it('it should return word: test', function(){
      assert.equal(start, 'start');
    })
  });

  describe('Valid number', function(){
    it('it should return number', function(){
      assert.typeOf(validNumber, 'Number');
    })
  });

  describe("Valid number value", function(){
    it('it should return more then 0', function(){
      assert.isAbove(validNumber, 0);
    })
  });
})