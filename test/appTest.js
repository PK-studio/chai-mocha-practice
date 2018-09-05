const assert = require('chai').assert;
const expect = require('chai').expect;
const app = require('../app');

describe('Init App', function(){
  it('find app location', function(){
    assert(app, 'app file didnt find');
  });
});

describe('@ Playing on values', function(){
  const start = app.basicValues.start();
  const addNumber = app.basicValues.addNumbers(5, 5);

  describe('Valid string', function(){
    it('it should return string', function(){
      assert.typeOf(start, 'string');
    });
  });

  describe('Match string', function(){
    it('it should return word: test', function(){
      assert.equal(start, 'start');
    });
  });

  describe('Valid number', function(){
    it('it should return number', function(){
      assert.typeOf(addNumber, 'Number');
    });
  });

  describe("check addNumber function", function(){
    it('it should return more then 0', function(){
      assert.isAbove(addNumber, 0);
    });
  });

  describe('check addNumber function', function(){
    it('it should give 10', function(){
      assert.equal(addNumber, 10);
    });
  });
});

describe('@ Paying on array', () => {
  let arrayGame = null;

  beforeEach( () => {
    arrayGame = new app.arrayGame();
  })

  describe('check if constructor function exist', () => {
    it('it should return constructor', () => {
      expect(arrayGame).to.be.a('object');
    });
  });

  describe('check all constructor methods', () =>  {
    it('expect array contains only numbers', () =>  {
      let checkValue = arrayGame.getNumbers().forEach(element => {
        expect(element).to.be.a('number' ,['Error - found string'])
      });
    });
    it('expect sumNumbers to return 0 afert initialization', () =>  {
      expect(arrayGame.sumNumbers()).to.equal(0);
    });
    it('expect multiplyAll to return null afert initialization', () =>  {
      expect(arrayGame.multiplyAll()).to.be.null;
    });
    it("expect sumNuber to return 5 after pushing 3 and 2", () => {
      arrayGame.push(3);
      arrayGame.push(2);
      expect(arrayGame.sumNumbers()).to.equal(5);
    });
    it("expect 0 after pushing 20 and 103 and cleaning array on the end", () => {
      arrayGame.push(20);
      arrayGame.push(103);
      arrayGame.clear();
      expect(arrayGame.sumNumbers()).to.equal(0);
    })
    it("expect null after pushing 10 and 1 and cleaning array on the end", () => {
      arrayGame.push(10);
      arrayGame.push(1);
      arrayGame.clear();
      expect(arrayGame.multiplyAll()).to.be.null;
    })
  });
})