/**
 * Created by Brayam on 30/08/2017.
 */
var corepo = require("./../../pageObjects/core/corepo.js"), core = new corepo();
var googlepo = require ("./../../pageObjects/poFiles/google.po.js"), google = new googlepo();
describe('angularjs homepage todo list', function() {
  //beforeEach(function () {
  //  browser.ignoreSynchronization = true;
  //});
  it('should add a todo', function() {
    browser.get('https://angularjs.org');

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });

  //it('should add a todo', function() {
    //browser.driver.get('https://mail.google.com');
    //core.clickElement(by.model('todoList.todoText')).sendKeys('write first protractor test');

  //google.goToUrlBase();
  //core.wait(3000);
  //google.google_enterTextInEmailTextBoxElement('bmachicado');
  //core.wait(3000);
  //google.google_clickOnNextButton();
  //core.wait(3000);

  //});

});