var Tabs = function () {

  var messages = $('a[icon="icon ion-email"]')
  var account = element(by.css('.icon ion-gear-b'))

  return {
    messages : messages,
    account : account
  }
}

module.exports = new Tabs()
