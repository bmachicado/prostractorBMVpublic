/**
 * Created by Brayam on 30/08/2017.
 */
//var corepo = require("./../../pageObjects/core/corepo.js"), core = new corepo();
//var googlepo = require ("./../../pageObjects/poFiles/google.po.js"), google = new googlepo();
var poList = require ("./../../pageObjects/poFiles/poList.js"), po = new poList();
describe('angularjs homepage todo list', function() {
  var failFast = require('jasmine-fail-fast');
  jasmine.getEnv().addReporter(failFast.init());
  //beforeEach(function () {
  //  browser.ignoreSynchronization = true;
  //});

  //it('must go to google url', function() {
  //});
  var browser1 = browser;
  var browser2 = browser.forkNewDriverInstance(false);
  browser1.ignoreSynchronization = true;
  browser2.ignoreSynchronization = true;
  po.googlePage.goToUrlBase(browser1);
  po.googlePage.goToUrlBase(browser2);
  //core.wait(browser1,3000);
  //core.wait(browser2,3000);
  po.googlePage.google_enterTextInEmailTextBoxElement(browser1,'bmachicado');
  po.googlePage.google_enterTextInEmailTextBoxElement(browser2,'bmachicado');
  //core.wait(browser1,3000);
  //core.wait(browser2,3000);
  po.googlePage.google_clickOnNextButton(browser1);
  po.googlePage.google_clickOnNextButton(browser2);
  //core.wait(browser1,3000);
  //core.wait(browser2,3000);

  //});

});