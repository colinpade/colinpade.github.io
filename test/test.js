'use strict';
//http://markbirbeck.com/2015/12/11/using-selenium-webdriver-with-mocha/
require('chai').should();

let webdriver = require('selenium-webdriver');

describe('WhaleWatcher site', function() {
  var driver;

  beforeEach(function() {
    driver = new webdriver.Builder().forBrowser('chrome').build();
  });

  afterEach(function() {
    driver.quit();
  });

  it('homepage loads', function(done) {
    driver.get('https://colinpade.github.io/')
    .then(() => driver.getTitle())
      .then(title => title.should.equal('Whale Watcher'))
    .then(() => done())
    .catch(error => done(error));
  });
  it('bitcoin page loads', function(done) {
    driver.get('https://colinpade.github.io/')
    .then(() => driver.findElement(webdriver.By.name('btc')).click())
    .then(() => driver.getTitle())
      .then(title => title.should.equal('Whale Watcher - Bitcoin'))
    .then(() => done())
    .catch(error => done(error));
  });
  it('ethereum page loads', function(done) {
    driver.get('https://colinpade.github.io/')
    .then(() => driver.findElement(webdriver.By.name('eth')).click())
    .then(() => driver.getTitle())
      .then(title => title.should.equal('Whale Watcher - Ethereum'))
    .then(() => done())
    .catch(error => done(error));
  });
  it('litecoin page loads', function(done) {
    driver.get('https://colinpade.github.io/')
    .then(() => driver.findElement(webdriver.By.name('ltc')).click())
    .then(() => driver.getTitle())
      .then(title => title.should.equal('Whale Watcher - Litecoin'))
    .then(() => done())
    .catch(error => done(error));
  });
  it('monero page DOES NOT load', function(done) {
    driver.get('https://colinpade.github.io/')
    .then(() => driver.findElement(webdriver.By.name('xmr')).click())
    .then(() => driver.getTitle())
      .then(title => title.should.equal('Whale Watcher'))
    .then(() => done())
    .catch(error => done(error));
  });
});
