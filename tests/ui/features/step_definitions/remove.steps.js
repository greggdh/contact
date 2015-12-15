var assert = require('assert');
var Browser = require('zombie');

module.exports = function () {
    'use strict';
    var _browser = new Browser();

    this.Given(/^display contact list$/, function (callback) {
        _browser.visit('http://127.0.0.1:3000/', function (err) {
            if (err)
                throw err;

            assert.ok(_browser.success);
            assert.equal(_browser.text('h1'), 'Contacts');
            var contact = _browser.query('#contacts');
            assert(contact);
            var tableContact = _browser.query('#contacts table');
            assert(tableContact);
            var buttonDelete = _browser.query('#contacts table a');
            assert(buttonDelete);
            var other =  _browser.tabs.current.Contact.Contacts.instance().iterator();
            var firstContact = other.next();
            assert.equal(firstContact.firstName(), 'Eric');
            assert.equal(firstContact.lastName(), 'RAMAT');
            var firstContact = firstContact.id();
            var buttons_delete_firstContact = _browser.query('#contacts a#button_'+idFirstContact);
            assert(buttons_delete_firstContact);

            callback();
        });
    });

    this.When(/^User click and delete a contact$/, function (callback) {
        _browser.visit('http://127.0.0.1:3000/', function (err) {
            if (err)
                throw err;
            var other =  _browser.tabs.current.Contact.Contacts.instance().iterator();
            var firstContact;
            var contact = other.next();
            firstContact = contact.id();
            _browser.clickLink('#contacts a#button_'+idFirstContact);

            callback();
        });
    });

};