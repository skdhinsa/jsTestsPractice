var MyClass = require('../src/myClass.js')
var sinon = require('sinon')
var myObj = new MyClass();
var chai = require('chai');
const { stub } = require('sinon');
var expect = chai.expect;


describe.skip("Test suite", function () {
  it("should test add method", function(){
    var res = myObj.add(3,2);
    expect(res).to.be.equal(5);
  });

  it("should spy the add method", function(){
    var spy = sinon.spy(myObj, "add") 
    var arg1 = 10, arg2 = 20;
    myObj.callAnotherfunc(arg1, arg2);
    // sinon.assert.calledOnce(spy);
    expect(spy.calledTwice).to.be.true;
    expect(spy.calledWith(arg1, arg2)).to.be.true;
    expect(spy.returnValues)
  });
});

// mocking
describe.skip("Test suite", function () {
  it("should mock say hello method", function(){
    var mock = sinon.mock(myObj);
    var expectation = mock.expects("sayHello");
    expectation.withArgs("hello");
    mock.verify;

  })
});


describe("Test suite for stub", function () {
  it("should stub the add method", function(){
    // when 
    var stub = sinon.stub(myObj, "add");
    stub.withArgs(10,12).returns(23); // assuming when we call with 10,12 it will return 199
    
    // then
    expect(myObj.callAnotherfunc(10,102)).to.be.equal(230);
  })
  
});

