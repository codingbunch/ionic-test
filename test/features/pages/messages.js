var Messages = function () {

  var title = element(by.css('title'))
  var list = element.all(by.repeater('message in messages'))

  return {
    title : title,
    list : list
  }
}

module.exports = new Messages()
