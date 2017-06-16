var React = require("react"),
    ReactDOM = require("react-dom"),
    TestUtils = require("react-addons-test-utils"),
    $         = require("jquery"),
    expect    = require("expect");

var TodoApp = require("TodoApp");

describe("TodoApp",() =>{
    it("Should exist",()=>{
        expect(TodoApp).toExist();
    });
});