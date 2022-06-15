var PurpleMine = PurpleMine || {} // eslint-disable-line no-use-before-define

PurpleMine.IssueList = (function () {
  'use strict'

  var instance
  function IssueList () {
    if (instance) {
      return instance
    }

    instance = this
    CheckIssueList()
  };

  function CheckIssueList () {
    if ($('table.list.issues').length > 0) {
      if ($('th.parent > a.sort').length > 0) {
        $('table.list.issues').addClass('colorize')
        var classMap = {
          'priority-high3': 'colorize-yellow',
          'priority-high2': 'colorize-orange',
          'priority-highest': 'colorize-red'
        }

        var masterPrio
        $('tr.issue').each(function () {
          var row = $(this)
          if (row.hasClass('parent') && !row.hasClass('child')) {
            // priority-highest priority-high2 priority-high3
            masterPrio = row.attr('class').match(/priority-[a-z]+\d*/)[0]
            row.addClass(classMap[masterPrio])
          }

          if (row.hasClass('child')) {
            row.addClass(classMap[masterPrio])
          }
        })
      }
    }
  }

  return IssueList
}())
