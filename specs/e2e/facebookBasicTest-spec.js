/**
 * Created by Brayam on 30/08/2017.
 */
var poList = require ("./../../pageObjects/poFiles/poList.js"), po = new poList();
var corepo = require("./../../pageObjects/core/corepo.js"), core = new corepo();
describe('angularjs facebook simple test', function() {

  var failFast = require('jasmine-fail-fast');
  jasmine.getEnv().addReporter(failFast.init());
//
  var browser1 = browser;
  browser1.ignoreSynchronization = true;
//
  po.facebookLoginPage.goToUrlBase(browser1);
  po.facebookLoginPage.facebookLoginPage_enterTextInEmailTextBoxElement(browser1,'asd',true,undefined,undefined,500);
  po.facebookLoginPage.facebookLoginPage_enterTextInPasswordTextBoxElement(browser1,'asd',true,undefined,undefined,500);
  po.facebookLoginPage.facebookLoginPage_clickOnLoginButtonElement(browser1,undefined,undefined,5000);


  //it("waiting for ", function(done) {
  //  core.wait(browser1,5000);
  //  console.log('hello it 1');
  //  done();
  //});
  //console.log('hello no it');
//
  //it("waiting for ", function() {
  //  core.wait(browser1,5000);
  //  console.log('hello it 2');
  //});
//

});

