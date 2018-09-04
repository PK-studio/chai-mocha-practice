const assert = require('chai').assert;
const app = require('../app');

describe('Init App', function(){
  it('find app location', function(){
    assert(app, 'app file didnt find');
  })
});

describe('Basic Values', function(){
  const start = app.basicValues.start();
  const addNumber = app.basicValues.addNumbers(5, 5);

  describe('Valid string', function(){
    it('it should return string', function(){
      assert.typeOf(start, 'string');
    })
  });

  describe('Match string', function(){
    it('it should return word: test', function(){
      assert.equal(start, 'start');
    })
  });

  describe('Valid number', function(){
    it('it should return number', function(){
      assert.typeOf(addNumber, 'Number');
    })
  });

  describe("check addNumber function", function(){
    it('it should return more then 0', function(){
      assert.isAbove(addNumber, 0);
    })
  });

  describe('check addNumber function', function(){
    it('it should give 10', function(){
      assert.equal(addNumber, 10);
    })
  })
})